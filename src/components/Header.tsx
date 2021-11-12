import React from 'react';
import styled from 'styled-components';
import  logo  from '../images/illustration-working.svg';

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`;

const Wrapper = styled.div`
	width: 100vw;
	min-height: 70vh;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	@media (max-width: 375px) {
		position: static;
		flex-direction: column-reverse;
	}
`;

const Logo = styled.img`
	@media (max-width: 1440px) {
		position: relative;
		right: -120px;
	}
	@media (max-width: 375px) {
		position: relative;
		left: 100px;
		width: 150%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10rem;
	
	@media (max-width: 375px) {
		position: static;
		margin: 30px 0 0 0;
		align-items: center;
	}
`;

const Title = styled.h1`
	font-size: 5rem;
	width: 60%;
	line-height: 5.5rem;
	color: hsl(255, 11%, 22%);

	@media (max-width: 1440px) {
		font-size: 4rem;
		width: 100%;
		line-height: 4.5rem;
	}
	@media (max-width: 375px) {
		font-size: 2.8rem;
		width: 100%;
		line-height: 3.2rem;
		text-align: center;
	}
`;

const Desc = styled.span`
	font-size: 1.2rem;
	width: 45%;
	color: hsl(257, 7%, 63%);

	@media (max-width: 1440px) {
		width: 100%;
	}
	@media (max-width: 375px) {
		width: 90%;
		text-align: center;
	}
`;

const Button = styled.a`
	padding: 10px 25px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    color: white;
    cursor: pointer;
    user-select: none;
	width: 160px;
	margin-top: 30px;
	text-align: center;

	@media (max-width: 375px) {
		margin-top: 20px;
	}
    &:active {
        opacity: 0.7;
    }
`;

const Header = () => {
	return (
		<div>
			<Container>
				<Wrapper>
					<Content>
						<Title>More than just shorter links</Title>
						<Desc>
							Build your brand's recognition and get detailed
							insights on how your links are performing.
						</Desc>
						<Button>Get Started</Button>
					</Content>
					<Logo src={logo} />
				</Wrapper>
			</Container>
		</div>
	)
}

export default Header;
