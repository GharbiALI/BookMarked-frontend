import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { Footer } from "./Footer";
import books from "../assets/books.png";

export const Home = () => {
  return (
    <PageContainer>
      <Header />

      <Hero>
        <HeroContainer>
          <HeroContent>
            <SubTitle>Personal Library Tracker</SubTitle>

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

              <SecondaryButton to="/login">Log in</SecondaryButton>
            </Actions>
          </HeroContent>
          <HeroImage>
            <Image src={books} alt="Books preview" title="books image" />
          </HeroImage>
        </HeroContainer>
      </Hero>

      <Features>
        <FeaturesLabel>How it works</FeaturesLabel>
        <FeaturesTitle>Everything your shelf needs</FeaturesTitle>

        <ItemRow>
          <Item>
            <ItemIcon>📚</ItemIcon>
            <ItemTitle>Log a new book</ItemTitle>
            <ItemText>
              Title, author, genre, and page count — BookMarked turns it into a
              card on your shelf instantly.
            </ItemText>
          </Item>

          <Item>
            <ItemIcon>📈</ItemIcon>
            <ItemTitle>Track your progress</ItemTitle>
            <ItemText>
              Move a book between to-read, reading, and finished as you go — its
              status updates instantly.
            </ItemText>
          </Item>

          <Item>
            <ItemIcon>⭐</ItemIcon>
            <ItemTitle>Rate what you finish</ItemTitle>
            <ItemText>
              Give finished books a star rating so your best reads always stand
              out on the shelf.
            </ItemText>
          </Item>
        </ItemRow>
      </Features>

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
  align-items: center;
  justify-content: center;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
`;

const HeroContent = styled.div`
  flex: 1;

  max-width: 600px;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
`;

const SubTitle = styled.span`
  display: inline-block;

  padding: 6px 14px;
  margin-bottom: 20px;

  background-color: #dbeafe;
  color: #1d4ed8;

  font-size: 13px;
  font-weight: 600;

  border-radius: 999px;
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
const Features = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 24px 80px;
`;

const FeaturesLabel = styled.p`
  margin: 0 0 8px 0;
  text-align: center;

  font-size: 13px;
  font-weight: 600;

  color: #64748b;
`;

const FeaturesTitle = styled.h2`
  margin: 0 0 40px 0;
  text-align: center;

  font-size: 26px;
  font-weight: 700;

  color: #0f172a;
`;

const ItemRow = styled.div`
  display: flex;
  gap: 20px;
`;

const Item = styled.div`
  flex: 1;
  padding: 24px;

  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
`;

const ItemIcon = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  background-color: #dbeafe;
  font-size: 18px;

  border-radius: 10px;
`;

const ItemTitle = styled.h3`
  margin: 0 0 8px 0;

  font-size: 16px;
  font-weight: 700;

  color: #0f172a;
`;

const ItemText = styled.p`
  margin: 0;

  font-size: 14px;
  line-height: 1.6;

  color: #64748b;
`;
