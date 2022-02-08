import React from 'react';

import { Button } from '../../common/Button/Button.jsx';
import { Logo } from './componets/Logo/Logo.jsx';
import { HEADER_BUTTON_TEXT } from '../../constants';

import { HeaderButtons, HeaderContainer } from './Header.styled.jsx';

const Header = ({ name }) => {
	return (
		<HeaderContainer>
			<Logo />
			<HeaderButtons>
				<span>{name}</span>
				<Button onClick='' text={HEADER_BUTTON_TEXT}></Button>
			</HeaderButtons>
		</HeaderContainer>
	);
};

export default Header;
