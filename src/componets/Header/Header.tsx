import React, { useState } from 'react';

import { Button } from '../../common/Button/Button';
import { Logo } from './componets/Logo/Logo';
import { LOGOUT_BUTTON_TEXT } from '../../constants/constants';

import { HeaderButtons, HeaderContainer } from './Header.styled';
import { HeaderProps } from './Header.types';
import { useHistory } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ id, user, onUserAuth }) => {
	let history = useHistory();
	console.log(user);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		localStorage.removeItem('token');
		history.push('/login');
		onUserAuth(null);
	}

	return (
		<HeaderContainer>
			<Logo />
			{user !== null &&
				<HeaderButtons>
					<span>{user?.name}</span>
					<Button text={LOGOUT_BUTTON_TEXT} id={id} onClick={handleSubmit}></Button>
				</HeaderButtons>
			}
		</HeaderContainer>
	);
};

export default Header;
