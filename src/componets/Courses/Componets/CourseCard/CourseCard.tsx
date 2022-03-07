import React from 'react';

import {
	Card,
	CourseInfo,
	CourseMetadata,
	Description,
	MetadataContainer,
	Title,
} from './CourseCard.styled';

import { Button } from '../../../../common/Button/Button';

import { PLACEHOLDER_SHOW_COURSE_TEXT } from '../../../../constants/constants';
import { CourseCardProps } from './CourseCard.types';

export const CourseCard: React.FC<CourseCardProps> = (props: CourseCardProps) => {
	return (
		<Card>
			<CourseInfo>
				<Title>
					<span>{props.course.title}</span>
				</Title>
				<Description>{props.course.description}</Description>
			</CourseInfo>
			<MetadataContainer>
				<CourseMetadata>
					<CourseInfo>
						<span className='bold-text'>Authors:</span>
						<span>{props.authors}</span>
					</CourseInfo>
					<CourseInfo>
						<span className='bold-text'>Duration:</span>
						<span>{props.course.duration}</span>
					</CourseInfo>
					<CourseInfo>
						<span className='bold-text'>Created:</span>
						<span>{props.course.creationDate}</span>
					</CourseInfo>
				</CourseMetadata>
				<div>
					<Button text={PLACEHOLDER_SHOW_COURSE_TEXT} id={''}></Button>
				</div>
			</MetadataContainer>
		</Card>
	);
};
