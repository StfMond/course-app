import styled from 'styled-components';

export const Card = styled.div`
	display: inline-flex;
	padding: 1rem;
	margin-bottom: 1rem;
	border: 1px solid #0d0;
	box-sizing: border-box;
`;

export const CourseInfo = styled.div`
	text-align: left;
	width: 60%;
	padding-right: 2rem;
`;

export const Title = styled.div`
	font-weight: bold;
	font-size: 2rem;
	padding-bottom: 1rem;
`;

export const Description = styled.div`
	font-size: 0.9rem;
`;

export const MetadataContainer = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: left;
`;

export const CourseMetadata = styled.div`
	padding-bottom: 1rem;
`;
