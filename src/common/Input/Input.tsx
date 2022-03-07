import React from 'react';
import { InputContainer } from './Input.styled';
import { InputProps } from './Input.types';

export const Input: React.FC<InputProps> = ({
	id,
	name,
	placeholder,
	value,
	onChange,
	type,
	pattern,
	minLength,
	className,
}) => (
	<InputContainer
		id={id}
		name={name}
		placeholder={placeholder}
		onChange={onChange}
		value={value}
		type={type}
		pattern={pattern}
		minLength={minLength}
		className={className}
	></InputContainer>
);
