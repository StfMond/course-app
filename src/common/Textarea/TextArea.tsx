import React from 'react';
import { TextContainer } from './TextArea.styled';
import { TextAreaProps } from './TextArea.types';

export const TextArea: React.FC<TextAreaProps> = ({
	id,
	placeholder,
	value,
	onChange,
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
		cols={cols}
		rows={rows}
	></TextContainer>
);
