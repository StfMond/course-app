import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
    PLACEHOLDER_EMAIL_TEXT, PLACEHOLDER_NAME_TEXT, PLACEHOLDER_PASSWORD_TEXT,
    REGISTRATION_TEXT
} from '../../constants/constants';
import { register } from '../../services/AuthService';
import { RegistrationResponse } from '../../types/types.d';
import { User } from '../../types/user';
import { InputRow, WrapperCenterForm } from '../App/App.styled';
import { ContainerForm, LoginFooter } from './Registration.styled';

export const Registration: React.FC = () => {
    let history = useHistory();

    const [user, setUser] = useState<User>({
        name: '',
        password: '',
        email: ''
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response: RegistrationResponse = await register(user);
        response.successful ? history.push('/login') : alert(response.errors);
    }

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <ContainerForm>
                    <WrapperCenterForm>
                        <h2>Registration</h2>
                        <InputRow>
                            <label htmlFor='name'>Title</label>
                            <Input
                                id='name'
                                name='name'
                                className='main-input'
                                placeholder={PLACEHOLDER_NAME_TEXT}
                                onChange={handleChange}
                            />
                        </InputRow>
                        <InputRow>
                            <label htmlFor='email'>Email</label>
                            <Input
                                id='email'
                                name='email'
                                className='main-input'
                                type='mail'
                                placeholder={PLACEHOLDER_EMAIL_TEXT}
                                onChange={handleChange}
                            />
                        </InputRow>
                        <InputRow>
                            <label htmlFor='password'>Password</label>
                            <Input
                                id='password'
                                name='password'
                                className='main-input'
                                type='password'
                                placeholder={PLACEHOLDER_PASSWORD_TEXT}
                                onChange={handleChange}
                            />
                        </InputRow>
                        <div>
                            <Button
                                text={REGISTRATION_TEXT}
                                id='btnRegistration'
                            />
                        </div>
                        <LoginFooter>
                            <span>If you have an account you can <a href="/login">Login</a></span>
                        </LoginFooter>
                    </WrapperCenterForm>
                </ContainerForm>
            </div>
        </form>
    );
};
