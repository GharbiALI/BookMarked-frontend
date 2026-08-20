import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <PageContainer>
      <Header />

      <Hero>
        <HeroContent>
          <Title>
            Track every book you <Highlight>read</Highlight>, in one place.
          </Title>

          <Description>
            BookMarked helps you add what you're reading, move books through
            to-read, reading, and finished, and rate the ones that left an
            impression on you.
          </Description>

          <Actions>
            <PrimaryButton to="/signin">
              Create your library <Arrow>→</Arrow>
            </PrimaryButton>

            <SecondaryButton to="/login">
              Log in
            </SecondaryButton>
          </Actions>
        </HeroContent>
      </Hero>

      <Footer />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const Hero = styled.section`
  flex: 1;

  padding: 80px 24px;

  background-color: #ebf2fa;

  display: flex;
  align-items: flex-start;
`;

const HeroContent = styled.div`
  width: 650px;

  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0 0 16px 0;

  font-size: 40px;
  font-weight: 700;

  color: #0f172a;
`;

const Highlight = styled.span`
  color: #2563eb;
`;

const Description = styled.p`
  width: 520px;

  margin: 0 0 28px 0;

  font-size: 15px;

  color: #64748b;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

const PrimaryButton = styled(Link)`
  display: flex;
  align-items: center;

  padding: 11px 22px;

  background-color: #2563eb;
  color: #ffffff;

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  border-radius: 8px;

  gap: 8px;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const Arrow = styled.span`
  font-size: 15px;
`;

const SecondaryButton = styled(Link)`
  padding: 11px 22px;

  background-color: #ffffff;
  color: #1e293b;

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  border: 1px solid #cbd5e1;
  border-radius: 8px;

  &:hover {
    border-color: #94a3b8;
    background-color: #f8fafc;
  }
`;
