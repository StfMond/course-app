import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
	CREATE_AUTHOR_BUTTON_TEXT,
	PLACEHOLDER_NAME_TEXT,
} from '../../constants/constants';
import { ButtonContainer, InputContainer } from '../App/App.styled';
import { CreateAuthorProps } from './CreateAuthor.types';

export const CreateAuthor: React.FC<CreateAuthorProps> = ({
	onCreateAuthor,
}) => {
	const [authorName, setAuthorName] = useState('');
	const handleCreateAuthor = (e: any) => {
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
					<label htmlFor='author'>Author name</label>
					<Input
						id='author'
						placeholder={PLACEHOLDER_NAME_TEXT}
						onChange={(e: any) => setAuthorName(e.target.value)}
					/>
					<ButtonContainer>
						<Button
							onClick={handleCreateAuthor}
							text={CREATE_AUTHOR_BUTTON_TEXT}
							id='btnCreateAuthor'
						></Button>
					</ButtonContainer>
				</form>
			</InputContainer>
		</div>
	);
};
