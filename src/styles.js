import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #363636;
	color: #DAE2F1;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	background-color: #F6F6F6;
	width: 80%;
	max-width: 18rem;
	padding: .2rem .1rem;
	border-radius: .3rem;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;