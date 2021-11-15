import React from 'react'
import styled from 'styled-components';
import BackgroundImage from '../images/bg-boost-desktop.svg';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const Wrapper = styled.div`
	min-height: 250px;
	width: 100vw;
	background-image: url(${BackgroundImage});
	background-color: hsl(257, 27%, 26%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Text = styled.h1`
	margin-bottom: 20px;
	font-size: 2.3rem;
	color: white;
	@media (max-width: 375px) {
		font-size: 1.7rem;
	}
`;

const Button = styled.a`
	padding: 12px 30px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    font-size: 1.1rem;
	font-weight: 700;
    color: white;
    cursor: pointer;
	user-select: none;
	&:active {
		opacity: 0.7;
	}
`;

const Link = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Boost your links today</Text>
				<Button>Get Started</Button>
			</Wrapper>
		</Container>
	)
}

export default Link;
