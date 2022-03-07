import React from 'react';

import { Author, Course } from '../../types/types.d';
import { CourseCard } from './Componets/CourseCard/CourseCard';
import { CourseProps } from './Courses.types';

export const CourseList: React.FC<CourseProps> = (props: CourseProps) => {
	const getAuthors = (courseAuthor: Course, authors: Author[]) => {
		const authorsList = authors
			.filter((el) => courseAuthor.authors.indexOf(el.id) >= 0)
			.map((x) => x.name);
		return authorsList.join(', ');
	};

	const courseCard = (course: Course, authors: Author[]) => {
		return {
			course,
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
