import styled from "styled-components";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Brand>
          <BrandName>BookMarked</BrandName>
        </Brand>

        <Copyright>
          © {new Date().getFullYear()} BookMarked. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;

  padding: 20px 0;

  background-color: #ffffff;

  border-top: 1px solid #e2e8f0;
`;

const FooterContent = styled.div`
  max-width: 1100px;

  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;

  gap: 8px;
`;

const BrandName = styled.span`
  font-size: 14px;
  font-weight: 700;

  color: #334155;
`;

const Copyright = styled.p`
  margin: 0;

  font-size: 13px;

  color: #64748b;
`;
