import React, { useState } from 'react';
import { InputRow, MainContainer } from '../App/App.styled';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { LoginContainer } from './Login.styled';
import { LoginResponse } from '../../types/types.d';
import { login } from '../../services/AuthService';
import { useHistory } from 'react-router-dom';
import { User } from '../../types/user';
import { LoginProps } from './Login.types';

export const Login: React.FC<LoginProps> = ({ onUserAuthenticate }) => {
	let history = useHistory();

	const [user, setUser] = useState<User>({
		name: '',
		password: '',
		email: ''
	});

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const response = await login(user);
		console.log(response);
		onUserAuthenticate(response ? response.user : null);
		if (!response?.successful) alert(response?.result);
		history.push('/courses');
	}

	const handleChange = (e: any) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [name]: value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<MainContainer>
				<LoginContainer>
					<h2>Login</h2>
					<InputRow>
						<label htmlFor='email'>Email</label>
						<Input
							id='email'
							name='email'
							className='main-input'
							placeholder='Enter email'
							onChange={handleChange}
						/>
					</InputRow>
					<InputRow>
						<label htmlFor='password'>Password</label>
						<Input
							id='password'
							name='password'
							className='main-input'
							placeholder='Enter password'
							onChange={handleChange}
						/>
					</InputRow>
					<div>
						<Button text='Login' id='btnCreateCourse' />
					</div>
					<div className='login-footer'>
						<span>
							If you don't have an account you can{' '}
							<a href='/registration' className='course-link'>
								Registration
							</a>
						</span>
					</div>
				</LoginContainer>
			</MainContainer>
		</form>
	);
};
