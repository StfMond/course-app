import React from 'react';
import { BaseLink } from './Link.styled';
import { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({ text, to, id }) => (
	<BaseLink id={id} href={to}>
		{text}
	</BaseLink>
);
