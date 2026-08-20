import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [generalError, setGeneralError] = useState<string>("");

  const handleUsernameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (usernameError) setUsernameError("");
    if (generalError) setGeneralError("");
  };

  const handlePasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
    if (generalError) setGeneralError("");
  };

  const sendInformation = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUsernameError("");
    setPasswordError("");
    setGeneralError("");

    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    }

    if (isValid) {
      if (username !== "admin" || password !== "123456") {
        setGeneralError("Invalid username or password.");
      } else {
        toast.success("Successfully logged in!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    }
  };

  return (
    <PageWrapper>
      <ToastContainer />
      <AppTitle>Book Marked</AppTitle>
      <Card>
        <SignInContainer>
          <StyledLink to="/login" $active={true}>
            Sign in
          </StyledLink>
          <StyledLink to="/signin" $active={false}>
            Sign up
          </StyledLink>
        </SignInContainer>

        <StyledForm action="#" method="post" onSubmit={sendInformation}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameUpdate}
              $hasError={Boolean(usernameError || generalError)}
            />
            {usernameError && <ErrorText>{usernameError}</ErrorText>}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordUpdate}
              $hasError={Boolean(passwordError || generalError)}
            />
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </InputGroup>

          {generalError && <ErrorText>{generalError}</ErrorText>}

          <SubmitButton type="submit">Log in</SubmitButton>
        </StyledForm>
      </Card>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #ebf2fa;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const AppTitle = styled.h1`
  margin: 0 0 24px 0;

  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
`;

const Card = styled.div`
  width: 100%;
  max-width: 380px;
  padding: 32px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

const SignInContainer = styled.div`
  display: flex;

  padding: 4px;
  margin-bottom: 24px;

  background-color: #f1f5f9;
  border-radius: 10px;
`;

const StyledLink = styled(Link)<{ $active: boolean }>`
  flex: 1;

  padding: 10px 0;

  text-align: center;
  text-decoration: none;

  background-color: ${(props) => (props.$active ? "#ffffff" : "transparent")};
  color: ${(props) => (props.$active ? "#0f172a" : "#64748b")};
  font-weight: ${(props) => (props.$active ? "600" : "500")};
  font-size: 14px;

  border-radius: 8px;

  transition: all 0.2s ease;

  box-shadow: ${(props) =>
    props.$active ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none"};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
`;

const Input = styled.input<{ $hasError: boolean }>`
  padding: 10px 14px;

  background-color: #f8fafc;
  color: #0f172a;
  font-size: 14px;

  border: ${(props) =>
    props.$hasError ? "2px solid #eb2525" : "1px solid #2563eb"};
  border-radius: 10px;
`;

const ErrorText = styled.p`
  margin-top: 6px;
  margin-bottom: 4px;

  color: #ef4444;
  font-size: 13px;
`;

const SubmitButton = styled.button`
  width: 100%;

  padding: 12px;
  margin-top: 8px;

  background-color: #2563eb;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;

  border: none;
  border-radius: 10px;

  cursor: pointer;
`;
