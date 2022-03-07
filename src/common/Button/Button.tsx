import React from 'react';
import { BaseButton } from './Button.styled';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ text, onClick, id }) => (
	<BaseButton id={id} onClick={onClick}>
		{text}
	</BaseButton>
);
