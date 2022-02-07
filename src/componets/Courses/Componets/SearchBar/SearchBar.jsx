import React from 'react';
import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import { InputWrapper } from './SearchBar.styled.jsx';

export const SearchBar = ({ value, onChange, onClick }) => (
	<InputWrapper>
		<Input
			placeholder='Enter course name...'
			type='search'
			value={value}
			onChange={onChange}
		></Input>
		<Button onClick={onClick} text='search'></Button>
	</InputWrapper>
);
