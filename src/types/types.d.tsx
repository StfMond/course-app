import { User } from "./user";

export interface Course {
	id: string;
	title: string;
	description: string;
	creationDate: Date;
	duration: number;
	authors: string[];
}

export interface Author {
	id: string;
	name: string;
}

export interface RegistrationResponse {
	successful: boolean,
	errors: string[],
}

export interface LoginResponse {
	successful: boolean,
	result: string,
	user: User,
}
