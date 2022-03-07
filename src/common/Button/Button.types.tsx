import { MouseEventHandler } from 'react';

export interface ButtonProps {
	text: string;
	id: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
