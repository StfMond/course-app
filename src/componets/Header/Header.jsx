import React from 'react';
import { Button } from '../../common/Button/Button.jsx';
import { Logo } from './componets/Logo/Logo.jsx';
import { HeaderButtons, HeaderContainer } from './Header.styled.jsx';

const Header = ({ name }) => {
	return (
		<HeaderContainer>
			<Logo />
			<HeaderButtons>
				<span>{name}</span>
				<Button onClick='' text='Logout'></Button>
			</HeaderButtons>
		</HeaderContainer>
	);
};

export default Header;
