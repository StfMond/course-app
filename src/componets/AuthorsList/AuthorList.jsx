import React from 'react';

import { Button } from '../../common/Button/Button';
import {
	ADD_AUTHOR_BUTTON_TEXT,
	REMOVE_AUTHOR_BUTTON_TEXT,
} from '../../constants';

import { Authors, AuthorRow, CourseListEmpty } from './AuthorList.styled';

export const AuthorList = ({
	authors,
	onAddAuthor,
	newAuthorsCourse,
	onRevomeAuthor,
}) => {
	const handleAddAuthor = (author) => {
		onAddAuthor(author);
	};
	const handleRemoveAuthor = (author) => {
		onRevomeAuthor(author);
	};
	return (
		<div>
			<Authors>
				<div>
					<h2>Authors</h2>
				</div>
				<div>
					{authors.map((author) => (
						<AuthorRow>
							<div>{author.name}</div>
							<Button
								onClick={() => handleAddAuthor(author)}
								text={ADD_AUTHOR_BUTTON_TEXT}
							/>
						</AuthorRow>
					))}
				</div>
			</Authors>
			<div>
				<div>
					<h2>Course authors</h2>
				</div>
				<div>
					{newAuthorsCourse.length === 0 && (
						<CourseListEmpty>Author list is empty</CourseListEmpty>
					)}
					{newAuthorsCourse?.map((author) => (
						<AuthorRow>
							<div>{author.name}</div>
							<Button
								onClick={() => handleRemoveAuthor(author)}
								text={REMOVE_AUTHOR_BUTTON_TEXT}
							/>
						</AuthorRow>
					))}
				</div>
			</div>
		</div>
	);
};
