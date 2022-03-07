import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainContainer, MainHeader, MainHeaderButton } from './App.styled';
import { Link } from '../../common/Link/Link';
import { SearchBar } from '../../componets/Courses/Componets/SearchBar/SearchBar';
import { CourseList } from '../../componets/Courses/Courses';
import { CreateCourse } from '../../componets/CreateCouse/CreateCourse';
import Header from '../../componets/Header/Header';
import { mockedAuthorsList, mockedCoursesList } from '../../constants/constants';
import { Author, Course, LoginResponse } from '../../types/types.d';
import { Login } from '../Login/Login';
import { Registration } from '../Registration/Registration';
import { User } from '../../types/user';

const App = () => {
	const [courses, setCourses] = useState<Course[]>(mockedCoursesList);
	const [authors, setAuthors] = useState<Author[]>(mockedAuthorsList);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchCoursesResults, setSearchCoursesResults] = useState<Course[]>(
		[]
	);

	const [courseAuthors, setCourseAuthors] = useState<Author[]>([]);
	const [authorsToAdd, setAuthorsToAdd] = useState<Author[]>([]);
	const [userAuth, setUserAuth] = useState<User | null>(null);

	const onSearchChange = (e: any) => {
		setSearchTerm(e.target.value);
	};

	const onSearchClick = () => {
		const results = courses?.filter(
			(course) =>
				course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				course.id === searchTerm
		);
		setSearchCoursesResults(results);
	};

	const isMainComponent = (flag: boolean) => {
		// setIsMainContainer(flag);
		if (!flag) setAuthorsToAdd(authors);
	};

	const onCreateCourse = (newCourse: Course) => {
		// isMainComponent(true);
		setCourses([...courses, newCourse]);
	};

	const onAddAuthor = (author: Author) => {
		const index = courseAuthors.findIndex((ob) => ob.id === author.id);

		if (index === -1) {
			setCourseAuthors((newAuthors) => [...newAuthors, author]);
			authorsToAdd.splice(
				authorsToAdd.findIndex((v) => v.id === author.id),
				1
			);
		}
	};

	const onRevomeAuthor = (author: Author) => {
		const index = authorsToAdd.findIndex((ob) => ob.id === author.id);

		if (index === -1) {
			setAuthorsToAdd((authorsToAdd) => {
				return [...authorsToAdd, author];
			});
			courseAuthors.splice(
				courseAuthors.findIndex((v) => v.id === author.id),
				1
			);
		}
	};

	const onCreateAuthor = (author: Author) => {
		setAuthorsToAdd((authorsToAdd) => {
			return [...authorsToAdd, author];
		});
		setAuthors((listAuthor) => {
			return [...listAuthor, author];
		});
	};

	const userLoginAuth = (userAuth: User | null) => {
		setUserAuth(userAuth);
	}

	useEffect(() => {
		if (searchTerm === '') setSearchCoursesResults(courses);
	}, [searchTerm, courses, authorsToAdd, courseAuthors, userAuth]);

	return (
		<div>
			<Router>
				<Header user={userAuth} id='idHeader' onUserAuth={userLoginAuth}  />
				<main>
					<Switch>
						<Route path="/login">
							<Login onUserAuthenticate={userLoginAuth} />
						</Route>
						<Route path="/registration" component={Registration} />
						<Route path='/courses'>
							<MainContainer>
								<MainHeader>
									<SearchBar
										value={searchTerm}
										onChange={onSearchChange}
										onClick={onSearchClick}
									></SearchBar>
									<MainHeaderButton>
										<Link
											to='/createCourse'
											id='btnAddNewCourse'
											text='Add new course'
										/>
									</MainHeaderButton>
								</MainHeader>
								<CourseList
									courses={searchCoursesResults}
									authors={authorsToAdd}
								/>
							</MainContainer>
						</Route>
						<Route path='/createCourse'>
							<CreateCourse
								onCreateCourse={onCreateCourse}
								authors={authorsToAdd}
								onAddAuthor={onAddAuthor}
								onCreateAuthor={onCreateAuthor}
								courseAuthors={courseAuthors}
								onRevomeAuthor={onRevomeAuthor}
							></CreateCourse>
						</Route>
					</Switch>
				</main>
			</Router>
		</div >
	);
};
export default App;
