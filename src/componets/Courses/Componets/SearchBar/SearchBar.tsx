import React from 'react';

import { Button } from '../../../../common/Button/Button';
import { Input } from '../../../../common/Input/Input';
import {
	PLACEHOLDER_SEARCH_TEXT,
	PLACEHOLDER_COURSE_TEXT,
} from '../../../../constants/constants';

import { InputWrapper } from './SearchBar.styled';
import { SearchBarProps } from './SearchBar.types';

export const SearchBar: React.FC<SearchBarProps> = ({
	value,
	onChange,
	onClick,
}) => (
	<InputWrapper>
		<Input
			placeholder={PLACEHOLDER_COURSE_TEXT}
			type='search'
			value={value}
			onChange={onChange}
			id={'txtSearch'}
		></Input>
		<Button
			onClick={onClick}
			text={PLACEHOLDER_SEARCH_TEXT}
			id={'btnSearch'}
		></Button>
	</InputWrapper>
);
