import React, { useState } from 'react';
import Header from './componets/Header/Header.jsx';
import { CourseList } from './componets/Courses/Courses.jsx';
import { mockedCoursesList, mockedAuthorsList } from './constants.js';
import { SearchBar } from './componets/Courses/Componets/SearchBar/SearchBar.jsx';
import { Button } from './common/Button/Button.jsx';
import { MainHeader, MainContainer, MainHeaderButton } from './App.styled.jsx';
import { CreateCourse } from './componets/CreateCouse/CreateCourse.jsx';

const App = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);
	const [IsMainContainer, setIsMainContainer] = React.useState(true);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [authorsToAdd, setAuthorsToAdd] = useState([]);

	const onSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const onSearchClick = () => {
		const results = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				course.id === searchTerm
		);
		setSearchResults(results);
	};

	const isMainComponent = (flag) => {
		setIsMainContainer(flag);
		if (!flag) setAuthorsToAdd(authors);
	};

	const onCreateCourse = (newCourse) => {
		isMainComponent(true);
		setCourses([...courses, newCourse]);
	};

	const onAddAuthor = (author) => {
		const index = courseAuthors.findIndex((ob) => ob.id === author.id);

		if (index === -1) {
			setCourseAuthors((newAuthors) => [...newAuthors, author]);
			authorsToAdd.splice(
				authorsToAdd.findIndex((v) => v.id === author.id),
				1
			);
		}
	};

	const onRevomeAuthor = (author) => {
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

	const onCreateAuthor = (author) => {
		setAuthorsToAdd((authorsToAdd) => {
			return [...authorsToAdd, author];
		});
		setAuthors((listAuthor) => {
			return [...listAuthor, author];
		});
	};

	React.useEffect(() => {
		if (searchTerm === '') setSearchResults(courses);
	}, [searchTerm, courses, authorsToAdd, courseAuthors]);

	return (
		<div>
			<Header name='Alan Brito' />
			{IsMainContainer && (
				<MainContainer>
					<MainHeader>
						<SearchBar
							value={searchTerm}
							onChange={onSearchChange}
							onClick={onSearchClick}
						></SearchBar>
						<MainHeaderButton>
							<Button
								onClick={() => isMainComponent(false)}
								text='Add new course'
							></Button>
						</MainHeaderButton>
					</MainHeader>
					<CourseList courses={searchResults} authors={authorsToAdd} />
				</MainContainer>
			)}
			{!IsMainContainer && (
				<CreateCourse
					onCreateCourse={onCreateCourse}
					authors={authorsToAdd}
					onAddAuthor={onAddAuthor}
					onCreateAuthor={onCreateAuthor}
					courseAuthors={courseAuthors}
					onRevomeAuthor={onRevomeAuthor}
				></CreateCourse>
			)}
		</div>
	);
};
export default App;
