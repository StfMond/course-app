import styled from 'styled-components';

export const BaseLink = styled.a`
	cursor: pointer;
	appearance: none;
	padding: 0.5rem 1.5rem;
	border: 1px solid purple;
	background-color: transparent;
	transition: 0.2s all;

	&:hover {
		background-color: #eee;
	}
`;
