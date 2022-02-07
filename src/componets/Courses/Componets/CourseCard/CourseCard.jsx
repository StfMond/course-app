import {
	Card,
	CourseInfo,
	CourseMetadata,
	Description,
	MetadataContainer,
	Title,
} from './CourseCard.styled';
import { Button } from '../../../../common/Button/Button';

export const CourseCard = (props) => {
	return (
		<Card>
			<CourseInfo>
				<Title>
					<span>{props.title}</span>
				</Title>
				<Description>{props.description}</Description>
			</CourseInfo>
			<MetadataContainer>
				<CourseMetadata>
					<CourseInfo>
						<span class='bold-text'>Authors:</span>
						<span>{props.authors}</span>
					</CourseInfo>
					<CourseInfo>
						<span class='bold-text'>Duration:</span>
						<span>{props.duration}</span>
					</CourseInfo>
					<CourseInfo>
						<span class='bold-text'>Created:</span>
						<span>{props.creationDate}</span>
					</CourseInfo>
				</CourseMetadata>
				<div>
					<Button onClick='' text='Show Course'></Button>
				</div>
			</MetadataContainer>
		</Card>
	);
};
