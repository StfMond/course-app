import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
	CREATE_AUTHOR_BUTTON_TEXT,
	PLACEHOLDER_NAME_TEXT,
} from '../../constants';

import {
	ButtonContainer,
	InputContainer,
} from '../CreateCouse/CreateCourse.styled';

export const CreateAuthor = ({ onCreateAuthor }) => {
	const [authorName, setAuthorName] = useState('');
	const handleCreateAuthor = (e) => {
		e.preventDefault();
		onCreateAuthor({ id: uuidv4(), name: authorName });
	};
	return (
		<div>
			<div>
				<h2>Add authors</h2>
			</div>
			<InputContainer>
				<form onSubmit={handleCreateAuthor}>
					<label for='author'>Author name</label>
					<Input
						id='author'
						placeholder={PLACEHOLDER_NAME_TEXT}
						onChange={(e) => setAuthorName(e.target.value)}
					/>
					<ButtonContainer>
						<Button
							onClick={handleCreateAuthor}
							text={CREATE_AUTHOR_BUTTON_TEXT}
						></Button>
					</ButtonContainer>
				</form>
			</InputContainer>
		</div>
	);
};
