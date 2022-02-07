import React from 'react';
import { InputContainer } from './Input.styled.jsx';

export const Input = ({ id, placeholder, value, onChange, type }) => (
	<InputContainer
		id={id}
		placeholder={placeholder}
		onChange={onChange}
		value={value}
		type={type}
	></InputContainer>
);
