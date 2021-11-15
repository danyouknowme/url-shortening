import React from 'react'
import styled from 'styled-components';
import Brand from '../images/icon-brand-recognition.svg';
import Detail from '../images/icon-detailed-records.svg';
import Fully from '../images/icon-fully-customizable.svg';
import Working from '../images/bg-boost-desktop.svg';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    min-height: 80vh;
    width: 100vw;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: relative;
`;

const Input = styled.div`
    top: -70px;
    position: absolute;
    width: 70vw;
    height: 150px;
    background-color: hsl(257, 27%, 26%);
    background-image: url(${Working});
    background-size: cover;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 375px) {
        flex-direction: column;
        justify-content: space-evenly;
        width: 90vw;
    }
`;

const InputTag = styled.input`
    font-size: 1rem;
    width: 70%;
    height: 40%;
    margin-right: 10px;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid white;
    &:focus {
        outline: none;
    }
    &:placeholder {
        opacity: 0.5;
    }
    @media (max-width: 375px) {
        width: 90%;
        margin: 0;
    }
`;

const Button = styled.button`
    width: 15%;
    height: 40%;
    margin-left: 10px;
    border-radius: 10px;
    background-color: hsl(180, 66%, 49%);
    border: none;
    font-size: 1rem;
    color: white;
    font-weight: 700;
    cursor: pointer;
    &:active {
        opacity: 0.5;
    }
    @media (max-width: 375px) {
        width: 90%;
        margin: 0;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;
    @media (max-width: 375px) {
        margin-bottom: 100px;
    }
`;

const TitleText = styled.h1`

`;

const TitleDesc = styled.span`
    width: 65%;
    text-align: center;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    padding-bottom: 50px;
    @media (max-width: 375px) {
        flex-direction: column;
        padding-bottom: 70px;
    }
`;

const Card = styled.div<{ marginTop: string, marginTopMobile: string}>`
    position: relative;
    width: 381px;
    height: 250px;
    background-color: white;
    margin: 0 20px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${(props) => props.marginTop};
    @media (max-width: 375px) {
        margin: ${(props) => props.marginTopMobile} 0 0 0;
        width: 340px;
    }
`;

const CardLogo = styled.div`
    position: absolute;
    top: -40px;
    left: 40px;
    width: 80px;
    height: 80px;
    background-color: hsl(257, 27%, 26%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 375px) {
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Logo = styled.img`
    
`;

const HorizontalLine = styled.div`
    position: absolute;
    top: 50%;
    width: 80%;
    height: 8px;
    background-color: hsl(180, 66%, 49%);
    @media (max-width: 375px) {
        display: none;
    }
`;

const VerticalLine = styled.div`
    display: none;
    position: absolute;
    bottom: 15%;
    right: 49%;
    width: 8px;
    height: 80%;
    background-color: hsl(180, 66%, 49%);
    @media (max-width: 375px) {
        display: block;
    }
`;

const CardText = styled.h2`
    width: 80%;
    margin: 20px 0;
    @media (max-width: 375px) {
        text-align: center;
    }
`;

const CardDesc = styled.span`
    width: 80%;
    @media (max-width: 375px) {
        text-align: center;
    }
`;

const Content = () => {
    return (
        <Container>
            <Wrapper>
                <Input>
                    <InputTag placeholder="Shorten a link here...   " />
                    <Button>Shorten it!</Button>
                </Input>
                <Title>
                    <TitleText>Advanced Statistics</TitleText>
                    <TitleDesc>Track how your links are performing across the web with our advanced statistics dashbord.</TitleDesc>
                </Title>
                <CardContainer>
                    <HorizontalLine />
                    <VerticalLine />
                    <Card marginTop='0' marginTopMobile='0'>
                        <CardLogo>
                            <Logo src={Brand} />
                        </CardLogo>
                        <CardText>Brand Recognition</CardText>
                        <CardDesc>
                            Boost your brand recognition with each click. Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.
                        </CardDesc>
                    </Card>
                    <Card marginTop='50px' marginTopMobile='70px'>
                        <CardLogo>
                            <Logo src={Detail} />
                        </CardLogo>
                        <CardText>Detailed Records</CardText>
                        <CardDesc>
                            Gain insights into who is clicking your links. Knowing when and where 
                            people engage with your content helps inform better decisions.
                        </CardDesc>
                    </Card>
                    <Card marginTop='100px' marginTopMobile='70px'>
                        <CardLogo>
                            <Logo src={Fully} />
                        </CardLogo>
                        <CardText>Fully Customizable</CardText>
                        <CardDesc>
                            Improve brand awareness and content discoverability through customizable 
                            links, supercharging audience engagement.
                        </CardDesc>
                    </Card>
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Content;
