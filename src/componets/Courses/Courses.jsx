import { CourseCard } from './Componets/CourseCard/CourseCard.jsx';

export const CourseList = (props) => {
	const getAuthors = (courseAuthor, authors) => {
		const authorsList = authors
			.filter((el) => courseAuthor.authors.indexOf(el.id) >= 0)
			.map((x) => x.name);
		return authorsList.join(', ');
	};

	const courseCard = (course, authors) => {
		return {
			...course,
			authors: getAuthors(course, authors),
		};
	};

	return (
		<div>
			{props.courses.map((course) => (
				<CourseCard {...courseCard(course, props.authors)} />
			))}
		</div>
	);
};
