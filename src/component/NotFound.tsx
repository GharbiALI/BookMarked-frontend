import styled from 'styled-components';
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container>
      <Content>
        <Title>Oops!</Title>

        <Subtitle>Where are we?</Subtitle>

        <Description>
          The page you are looking for was moved, removed, renamed
          or might never have existed.
        </Description>

        <HomeButton to="/">Go Home</HomeButton>
      </Content>

      <AppImage
        src="/404.png"
        alt="Sleepin bear with two penguins"
        title="Sleepin bear with two penguins"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 60px 80px;

  background-color: #A9DDEA;

  font-family: sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 420px;
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 800;
  color: #1a2b4c;

  margin: 0;
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 400;
  color: #159ed0;

  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #557085;

  width: 300px;

  margin: 0;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 24px;

  background-color: #00a3e0;
  color: #ffffff;

  font-size: 16px;
  font-weight: 500;

  border: 0;
  border-radius: 4px;

  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0082b3;
  }
`;

const AppImage = styled.img`
  width: 620px;
  margin: 0;
`;