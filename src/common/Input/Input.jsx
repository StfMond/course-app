import React from 'react';
import { InputContainer } from './Input.styled.jsx';

export const Input = ({
	id,
	name,
	placeholder,
	value,
	onChange,
	type,
	pattern,
	minLength,
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
	></InputContainer>
);
