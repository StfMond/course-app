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
	const [newAuthors, setNewAuthors] = useState([]);
	const [authorsToAdd, setAuthorsToAdd] = useState([]);

	const onSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const onSearchClick = () => {
		const results = courses.filter(
			(course) =>
				course.title.toLowerCase().includes(searchTerm) ||
				course.id === searchTerm
		);
		setSearchResults(results);
	};

	const isMainComponent = (flag) => {
		setIsMainContainer(flag);
		if (!flag) setAuthorsToAdd(authors);
	};

	const createCourse = () => {
		isMainComponent(true);
		// if (authorsToAdd.length < 0) setAuthorsToAdd(authors);
	};

	const onAddAuthor = (author) => {
		const index = newAuthors.findIndex((ob) => ob.id === author.id);

		if (index === -1) {
			setNewAuthors((newAuthors) => {
				return [...newAuthors, author];
			});
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
			newAuthors.splice(
				newAuthors.findIndex((v) => v.id === author.id),
				1
			);
		}
	};

	const onCreateAuthor = (author) => {
		setAuthorsToAdd((authorsToAdd) => {
			return [...authorsToAdd, author];
		});
	};

	React.useEffect(() => {
		if (searchTerm === '') setSearchResults(courses);
	}, [searchTerm, courses, authorsToAdd.length, authors]);

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
					<CourseList courses={searchResults} authors={authors} />
				</MainContainer>
			)}
			{!IsMainContainer && (
				<CreateCourse
					onCreateCourse={createCourse}
					authors={authorsToAdd}
					onAddAuthor={onAddAuthor}
					onCreateAuthor={onCreateAuthor}
					newAuthorsCourse={newAuthors}
					onRevomeAuthor={onRevomeAuthor}
				></CreateCourse>
			)}
		</div>
	);
};
export default App;
