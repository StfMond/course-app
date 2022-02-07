import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Header = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
	box-sizing: border-box;
	text-align: left;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	padding: 1rem 0;
`;

export const MainContainer = styled.div`
	display: inline-flex;
	margin-top: 2rem;
	padding: 1rem;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #5df;
`;

export const MainLeft = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-right: 1rem;
	box-sizing: border-box;
	margin-bottom: 1rem;
`;

export const MainRight = styled.div`
	width: 100%;
	padding: 0 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	width: 100%;
	padding: 0.2rem 0;
`;

export const ButtonContainer = styled.div`
	padding: 1rem;
	text-align: center;
`;
