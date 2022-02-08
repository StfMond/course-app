import React from 'react';
import { TextContainer } from './TextArea.styled.jsx';

export const TextArea = ({
	id,
	placeholder,
	value,
	onChange,
	type,
	name,
	cols,
	rows,
	minLength,
}) => (
	<TextContainer
		minLength={minLength}
		id={id}
		name={name}
		placeholder={placeholder}
		onChange={onChange}
		value={value}
		type={type}
		cols={cols}
		rows={rows}
	></TextContainer>
);
