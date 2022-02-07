import React from 'react';
import { BaseButton } from './Button.styled.jsx';

export const Button = ({ text, onClick, id }) => (
	<BaseButton id={id} onClick={onClick}>
		{text}
	</BaseButton>
);
