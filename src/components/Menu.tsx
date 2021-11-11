import { MenuProps } from '../types/MenuProps';
import styled from 'styled-components';

const Container = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    justify-content: center;
    @media (max-width: 375px) {
        display: flex;
    }
`;

const Wrapper = styled.div`
    width: 90vw;
    height: 100%;
    background-color: hsl(257, 27%, 26%);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

const MenuList = styled.a`
    color: white;
    margin: 20px 0;
    font-weight: 700;
    font-size: 1.2rem;
    width: 85%;
    text-align: center;
`;

const Line = styled.span`
    background-color: rgba(255, 255, 255, 0.2);
    width: 90%;
    height: 1px;
    margin: 5px 0;
`;

const SignUp = styled.a`
    background-color: hsl(180, 66%, 49%);
    text-align: center;
    color: white;
    padding: 10px 0;
    width: 85%;
    border-radius: 25px;
    margin: 10px 0 40px 0;
    font-weight: 700;
    font-size: 1.2rem;
`;


const Menu: React.FC<MenuProps> = ({ openMenu, setOpenMenu }) => {
    return (
        <>
            {openMenu && (
                <Container>
                    <Wrapper>
                        <MenuList style={{ marginTop: '40px' }} onClick={() => setOpenMenu(false)}>Features</MenuList>
                        <MenuList onClick={() => setOpenMenu(false)}>Pricing</MenuList>
                        <MenuList onClick={() => setOpenMenu(false)}>Resources</MenuList>
                        <Line />
                        <MenuList onClick={() => setOpenMenu(false)}>Login</MenuList>
                        <SignUp onClick={() => setOpenMenu(false)}>Sign Up</SignUp>
                    </Wrapper>
                </Container>
            )}
        </>
    )
}

export default Menu;
