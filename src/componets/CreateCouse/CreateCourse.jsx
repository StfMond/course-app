import React from 'react';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { TextArea } from '../../common/Textarea/TextArea';
import { AuthorList } from '../AuthorsList/AuthorList';
import { CreateAuthor } from '../CreateAuthor/CreateAuthor';
import {
	Header,
	Wrapper,
	Description,
	MainContainer,
	MainLeft,
	Content,
	InputContainer,
	MainRight,
} from './CreateCourse.styled';

export const CreateCourse = (props) => {
	return (
		<div>
			<Wrapper>
				<Header>
					<div>
						<label for='title'>Title</label>
						<Input id='title' class='main-input' placeholder='Enter title...' />
					</div>
					<div>
						<Button onClick={props.onCreateCourse} text='Create Course' />
					</div>
				</Header>
				<Description>
					<label for='description'>Description</label>
					<TextArea
						name='description'
						id='description'
						cols='1'
						rows='5'
						placeholder='Enter description'
					/>
				</Description>
			</Wrapper>
			<MainContainer>
				<MainLeft>
					<Content>
						<CreateAuthor onCreateAuthor={props.onCreateAuthor}></CreateAuthor>
					</Content>
					<Content>
						<div>
							<h2>Duration</h2>
						</div>
						<InputContainer>
							<label for='duration'>Duration</label>
							<Input
								id='duration'
								type='text'
								placeholder='Enter duration in minutes...'
							/>
						</InputContainer>
						<div class='duration-timer'>
							Duration: <span class='bold-text'>00:00</span> hours
						</div>
					</Content>
				</MainLeft>
				<MainRight>
					<AuthorList
						authors={props.authors}
						onAddAuthor={props.onAddAuthor}
						newAuthorsCourse={props.newAuthorsCourse}
						onRevomeAuthor={props.onRevomeAuthor}
					></AuthorList>
				</MainRight>
			</MainContainer>
		</div>
	);
};
