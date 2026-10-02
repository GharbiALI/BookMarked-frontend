import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <TopRow>
          <BrandColumn>
            <BrandName>BookMarked</BrandName>
            <Tagline>Track every book you read, in one place.</Tagline>
          </BrandColumn>

          <LinkColumn>
            <ColumnTitle>Product</ColumnTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/library">My library</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Account</ColumnTitle>
            <FooterLink to="/login">Log in</FooterLink>
            <FooterLink to="/signin">Create account</FooterLink>
          </LinkColumn>
        </TopRow>

        <Copyright>
          © {new Date().getFullYear()} BookMarked. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;

  padding: 48px 0 24px 0px;

  background-color: #ffffff;

  border-top: 1px solid #e2e8f0;
`;

const FooterContent = styled.div`
  max-width: 1100px;

  margin: 0 auto;
  padding: 0 24px;
`;

const TopRow = styled.div`
  display: flex;

  gap: 60px;

  margin-bottom: 32px;
`;

const BrandColumn = styled.div`
  flex: 1;
`;

const BrandName = styled.p`
  margin: 0 0 8px 0;

  font-size: 16px;
  font-weight: 700;

  color: #0f172a;
`;

const Tagline = styled.p`
  margin: 0;
  max-width: 240px;

  font-size: 13px;
  line-height: 1.5;

  color: #64748b;
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const ColumnTitle = styled.p`
  margin: 0 0 4px 0;

  font-size: 13px;
  font-weight: 700;

  color: #0f172a;
`;

const FooterLink = styled(Link)`
  font-size: 13px;
  color: #64748b;

  text-decoration: none;

  &:hover {
    color: #2563eb;
  }
`;

const Copyright = styled.p`
  margin: 0;

  font-size: 10px;
  text-align: right;

  color: #64748b;
`;