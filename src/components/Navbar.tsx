import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { MenuProps } from "../types/MenuProps";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: 100vw;
    height: 100px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Left = styled.div`
    margin-left: 120px;
    display: flex;
    align-items: center;
    @media (max-width: 375px) {
        margin-left: 20px;
    }
`;

const Logo = styled.img`
    margin-right: 20px;
`;

const Menu = styled.a`
    margin: 0 20px;
    font-size: 1rem;
    font-weight: 700;
    color: hsl(257, 7%, 63%);
    cursor: pointer;

    &:hover {
        color: hsl(255, 11%, 22%);
    }
    @media (max-width: 375px) {
        display: none;
    }
`;

const SignUp = styled.a`
    margin-left: 20px;
    padding: 10px 25px;
    border-radius: 25px;
    background-color: hsl(180, 66%, 49%);
    font-size: 1rem;
    color: white;
    cursor: pointer;
    user-select: none;

    &:active {
        opacity: 0.7;
    }
    @media (max-width: 375px) {
        display: none;
    }
`;

const Right = styled.div`
    margin-right: 120px;
    display: flex;
    align-items: center;
    @media (max-width: 375px) {
        margin-right: 20px;
    }
`;

const Hamburger = styled.div`
    display: none;
    color: hsl(257, 7%, 63%);
    @media (max-width: 375px) {
        display: block;
    }
`;

const Navbar: React.FC<MenuProps> = ({ openMenu, setOpenMenu}) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo src={logo} />
                    <Menu>Features</Menu>
                    <Menu>Pricing</Menu>
                    <Menu>Resources</Menu>
                </Left>
                <Right>
                    {(!openMenu) ? (
                        <Hamburger>
                            <MenuIcon fontSize='large' onClick={() => setOpenMenu(!openMenu)} />
                        </Hamburger>
                    ): 
                        <Hamburger>
                            <MenuOpenIcon fontSize='large' onClick={() => setOpenMenu(!openMenu)} />
                        </Hamburger>
                    }
                    <Menu>Login</Menu>
                    <SignUp>Sign Up</SignUp>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
