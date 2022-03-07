import React from 'react';

import { Button } from '../../common/Button/Button';
import {
	ADD_AUTHOR_BUTTON_TEXT,
	REMOVE_AUTHOR_BUTTON_TEXT,
} from '../../constants/constants';
import { Author } from '../../types/types.d';

import { Authors, AuthorRow, CourseListEmpty } from './AuthorList.styled';
import { AuthorListProps } from './AuthorList.types';

export const AuthorList: React.FC<AuthorListProps> = ({
	authors,
	onAddAuthor,
	newAuthorsCourse,
	onRevomeAuthor,
}) => {
	const handleAddAuthor = (author: Author) => {
		onAddAuthor(author);
	};
	const handleRemoveAuthor = (author: Author) => {
		onRevomeAuthor(author);
	};
	return (
		<div>
			<Authors>
				<div>
					<h2>Authors</h2>
				</div>
				<div>
					{authors.map((author: Author) => (
						<AuthorRow>
							<div>{author.name}</div>
							<Button
								onClick={() => handleAddAuthor(author)}
								text={ADD_AUTHOR_BUTTON_TEXT}
								id={'btnAddAuthor'}
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
					{newAuthorsCourse?.map((author: Author) => (
						<AuthorRow>
							<div>{author.name}</div>
							<Button
								onClick={() => handleRemoveAuthor(author)}
								text={REMOVE_AUTHOR_BUTTON_TEXT}
								id={'btnNewAuthor'}
							/>
						</AuthorRow>
					))}
				</div>
			</div>
		</div>
	);
};
