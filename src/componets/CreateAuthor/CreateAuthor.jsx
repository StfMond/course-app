import React, { useState } from 'react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
	ButtonContainer,
	InputContainer,
} from '../CreateCouse/CreateCourse.styled';
import { v4 as uuidv4 } from 'uuid';

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
						placeholder='Enter title...'
						onChange={(e) => setAuthorName(e.target.value)}
					/>
					<ButtonContainer>
						<Button onClick={handleCreateAuthor} text='Create author'></Button>
					</ButtonContainer>
				</form>
			</InputContainer>
		</div>
	);
};
