import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import {
	PLACEHOLDER_SEARCH_TEXT,
	PLACEHOLDER_COURSE_TEXT,
} from '../../../../constants';

import { InputWrapper } from './SearchBar.styled.jsx';

export const SearchBar = ({ value, onChange, onClick }) => (
	<InputWrapper>
		<Input
			placeholder={PLACEHOLDER_COURSE_TEXT}
			type='search'
			value={value}
			onChange={onChange}
		></Input>
		<Button onClick={onClick} text={PLACEHOLDER_SEARCH_TEXT}></Button>
	</InputWrapper>
);
