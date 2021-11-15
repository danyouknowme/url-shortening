import React from 'react'
import SVG from "react-inlinesvg";
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import Facebook from '../images/icon-facebook.svg';
import Twitter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg';
import Instagram from '../images/icon-instagram.svg';

interface SVGProps {
    color: string;
    attrs: string;
  }

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    height: 350px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color :hsl(260, 8%, 14%);
    @media (max-width: 375px) {
        height: 100%;
    }
`;

const Jumbotron = styled.div`
    width: 80%;
    height: 60%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    @media (max-width: 375px) {
        flex-direction: column;
    }
`;

const LogoContainer = styled(SVG)<SVGProps>`
    margin-left: 20px;
    & path {
        fill: ${({ color }) => color};
    }
    @media (max-width: 375px) {
            margin: ${({ attrs }) => attrs === 'title' ? '40px auto 0px': '20px 10px'};
    }
`;

const Links = styled.div`
    display: flex;
    color: white;
    @media (max-width: 375px) {
       text-align: center;
       flex-direction: column;
       justify-content: center;
       margin: 10px auto;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 40px;
    @media (max-width: 375px) {
       margin: 20px auto;
    }
`;

const Title = styled.span`
    font-weight: 700;
    margin-bottom: 20px;
`;

const Link = styled.span`
    margin-bottom: 7px;
    color: hsl(0, 0%, 75%);
`;

const Social = styled.div`
    display: flex;
    @media (max-width: 375px) {
       margin: 0 auto 30px;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Jumbotron>
                    <LogoContainer color="#fff" attrs='title' src={Logo}/>
                    <Links>
                        <Column>
                            <Title>Features</Title>
                            <Link>Link Shortening</Link>
                            <Link>Branded Links</Link>
                            <Link>Analytics</Link>
                        </Column>
                        <Column>
                            <Title>Resources</Title>
                            <Link>Blog</Link>
                            <Link>Developers</Link>
                            <Link>Support</Link>
                        </Column>
                        <Column>
                            <Title>Company</Title>
                            <Link>About</Link>
                            <Link>Our Team</Link>
                            <Link>Careers</Link>
                            <Link>Contact</Link>
                        </Column>
                    </Links>
                    <Social>
                        <LogoContainer color="#fff" attrs='' src={Facebook}/>
                        <LogoContainer color="#fff" attrs='' src={Twitter}/>
                        <LogoContainer color="#fff" attrs='' src={Pinterest}/>
                        <LogoContainer color="#fff" attrs='' src={Instagram}/>
                    </Social>
                </Jumbotron>
            </Wrapper>
        </Container>
    )
}

export default Footer;
