import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink to="/">
          <LogoText>BookMarked</LogoText>
        </LogoLink>

        <Navigation>
          <NavigationLink to="/" $active={location.pathname === "/"}>
            Home
          </NavigationLink>

          <NavigationLink
            to="/library"
            $active={location.pathname === "/library"}
          >
            My library
          </NavigationLink>

          <NavigationLink to="/login" $active={location.pathname === "/login"}>
            Log in
          </NavigationLink>

          <CreateAccountLink to="/signin">
            Create account
          </CreateAccountLink>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;

  background-color: #ffffff;

  border-bottom: 1px solid #e2e8f0;
`;

const HeaderContent = styled.div`
  max-width: 1100px;

  margin: 0 auto;
  padding: 16px 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  gap: 10px;

  text-decoration: none;
`;

const LogoText = styled.span`
  font-size: 20px;
  font-weight: 700;

  color: #0f172a;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;

  gap: 12px;
`;

const NavigationLink = styled(Link)<{ $active?: boolean }>`
  padding: 8px 16px;

  color: ${(props) => (props.$active ? "#2563eb" : "#475569")};
  background-color: ${(props) =>
    props.$active ? "#eff6ff" : "transparent"};

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  border-radius: 8px;

  &:hover {
    color: #2563eb;
    background-color: #f8fafc;
  }
`;

const CreateAccountLink = styled(Link)`
  padding: 9px 18px;

  color: #ffffff;
  background-color: #2563eb;

  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  border-radius: 8px;

  &:hover {
    background-color: #1d4ed8;
  }
`;
