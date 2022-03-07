import styled from 'styled-components';

export const MainContainer = styled.div`
	margin-top: 2rem;
	padding: 1rem;
	height: 100%;
	border: 1px solid #5df;
`;

export const MainHeader = styled.div`
	display: inline-flex;
	justify-content: space-between;
	width: 100%;
	box-sizing: border-box;
	margin-bottom: 1rem;
`;

export const MainHeaderButton = styled.div`
	width: 100%;
	display: inline-flex;
	justify-content: flex-end;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	width: 100%;
	padding: 0.2rem 0;
`;

export const InputRow = styled.div`
	display: flex;
  	box-sizing: border-box;
	flex-direction: column;
	padding: 0 1rem 1rem;
	width: 100%;
 	max-width: 21rem;
`;

export const ButtonContainer = styled.div`
	padding: 1rem;
	text-align: center;
`;

export const MainContainerForm = styled.div`
	display: inline-flex;
	margin-top: 2rem;
	padding: 1rem;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #5df;
`;

export const Header = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: flex-end;
	width: 100%;
	box-sizing: border-box;
	text-align: left;
`;

export const WrapperCenterForm = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;	
`;
