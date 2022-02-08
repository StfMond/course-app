import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { TextArea } from '../../common/Textarea/TextArea';
import { AuthorList } from '../AuthorsList/AuthorList';
import { CreateAuthor } from '../CreateAuthor/CreateAuthor';
import {
	EMPTY_FIELDS,
	CREATE_COURSE_BUTTON_TEXT,
	PLACEHOLDER_DURATION_TEXT,
	PLACEHOLDER_DESCRIPTION_TEXT,
	PLACEHOLDER_TITLE_TEXT,
} from '../../constants';

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

export const CreateCourse = ({
	onCreateCourse,
	authors,
	courseAuthors,
	onAddAuthor,
	onRevomeAuthor,
	onCreateAuthor,
}) => {
	const [duration, setDuration] = useState(0);
	const [course, setCourse] = useState({
		title: '',
		description: '',
		duration: 0,
		authors: [],
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setCourse({ ...course, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (course.title && course.description && course.duration) {
			const newCourse = {
				...course,
				id: uuidv4(),
				creationDate: new Date().toString(),
			};
			onCreateCourse(newCourse);
		} else alert(EMPTY_FIELDS);
	};

	const handleDuration = (e) => {
		const re = /^[0-9\b]+$/;
		if (e.target.value === '' || re.test(e.target.value)) {
			setDuration(e.target.value);
			handleChange(e);
		}
	};

	return (
		<div>
			<Wrapper>
				<Header>
					<div>
						<label for='title'>Title</label>
						<Input
							id='title'
							name='title'
							class='main-input'
							placeholder={PLACEHOLDER_TITLE_TEXT}
							value={course.title}
							onChange={handleChange}
						/>
					</div>
					<div>
						<Button onClick={handleSubmit} text={CREATE_COURSE_BUTTON_TEXT} />
					</div>
				</Header>
				<Description>
					<label for='description'>Description</label>
					<TextArea
						name='description'
						id='description'
						cols='1'
						rows='5'
						placeholder={PLACEHOLDER_DESCRIPTION_TEXT}
						value={course.description}
						onChange={handleChange}
						minLength={2}
					/>
				</Description>
			</Wrapper>
			<MainContainer>
				<MainLeft>
					<Content>
						<CreateAuthor onCreateAuthor={onCreateAuthor}></CreateAuthor>
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
								name='duration'
								placeholder={PLACEHOLDER_DURATION_TEXT}
								value={course.duration}
								onChange={handleDuration}
								pattern='[0-9]*'
							/>
						</InputContainer>
						<div class='duration-timer'>
							Duration:{' '}
							<span class='bold-text'>
								{Math.floor(duration / 60)}:{duration % 60}
							</span>{' '}
							hours
						</div>
					</Content>
				</MainLeft>
				<MainRight>
					<AuthorList
						authors={authors}
						newAuthorsCourse={courseAuthors}
						onAddAuthor={onAddAuthor}
						onRevomeAuthor={onRevomeAuthor}
					></AuthorList>
				</MainRight>
			</MainContainer>
		</div>
	);
};
