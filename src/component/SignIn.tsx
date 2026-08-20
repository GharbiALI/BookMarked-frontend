import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleUsernameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const hasMinLength = password.length >= 12;

  const hasNumber = password
    .split("")
    .some((char) => char >= "0" && char <= "9");

  const hasLowercase = password
    .split("")
    .some((char) => char >= "a" && char <= "z");

  const hasUppercase = password
    .split("")
    .some((char) => char >= "A" && char <= "Z");

  const hasSpecialCharacter = password
    .split("")
    .some(
      (char) =>
        !(char >= "A" && char <= "Z") &&
        !(char >= "a" && char <= "z") &&
        !(char >= "0" && char <= "9"),
    );

  const isUsernameValid = () => username.trim().length >= 3;

  const isEmailValid = () => {
    const atIndex = email.indexOf("@");
    const dotIndex = email.lastIndexOf(".");

    return (
      atIndex > 0 &&
      dotIndex > atIndex + 1 &&
      dotIndex < email.length - 1 &&
      !email.includes(" ")
    );
  };

  const isPasswordValid = () =>
    hasMinLength &&
    hasNumber &&
    hasLowercase &&
    hasUppercase &&
    hasSpecialCharacter;

  const isConfirmPasswordValid = () =>
    confirmPassword !== "" && confirmPassword === password;

  const usernameValid = isUsernameValid();
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid();
  const confirmPasswordValid = isConfirmPasswordValid();

  const formValid =
    usernameValid && emailValid && passwordValid && confirmPasswordValid;

  const isValidReset =
    username.length > 0 ||
    email.length > 0 ||
    password.length > 0 ||
    confirmPassword.length > 0;

const sendInformation = (
  e: React.SubmitEvent<HTMLFormElement>,
) => {
  e.preventDefault();

  if (
    formValid &&
    username === "admin" &&
    password === "123456"
  ) {
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
};


  const notify = () =>
    toast.success("Account created successfully!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "light",
    });

  const displayUsernameError = () => {
    let errorMessage = "";

    if (username.length > 0 && username.length < 3) {
      errorMessage = "Username must be at least 3 characters";
    }

    return errorMessage;
  };

  const displayEmailError = () => {
    let errorMessage = "";

    if (email.length > 0 && !emailValid) {
      errorMessage = "Please enter a valid email address";
    }

    return errorMessage;
  };

  return (
    <Container>
      <ToastContainer />

      <AppTitle>Book Marked</AppTitle>

      <SignUpContainer>
        <TabContainer>
          <StyledLink to="/login" $active={false}>
            Sign in
          </StyledLink>

          <StyledLink to="/signin" $active={true}>
            Sign up
          </StyledLink>
        </TabContainer>

        <StyledForm action="#" method="post" onSubmit={sendInformation}>
          <InputGroup>
            <Label htmlFor="username">Username</Label>

            <Input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameUpdate}
              placeholder="Enter your username"
              $hasValue={username !== ""}
              $isValid={usernameValid}
            />

            {!usernameValid && username !== "" && (
              <ErrorText>{displayUsernameError()}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email</Label>

            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailUpdate}
              placeholder="Enter your email"
              $hasValue={email !== ""}
              $isValid={emailValid}
            />

            {!emailValid && email !== "" && (
              <ErrorText>{displayEmailError()}</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="password">Password</Label>

            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordUpdate}
              placeholder="Enter password"
              $hasValue={password !== ""}
              $isValid={passwordValid}
            />

            <ChecklistContainer>
              <ChecklistTitle>Strong password. Must contain:</ChecklistTitle>

              <RequirementItem $isCompleted={hasMinLength}>
                <StatusIcon $isCompleted={hasMinLength}>
                  {hasMinLength ? "✓" : "✕"}
                </StatusIcon>
                At least 12 characters
              </RequirementItem>

              <RequirementItem $isCompleted={hasNumber}>
                <StatusIcon $isCompleted={hasNumber}>
                  {hasNumber ? "✓" : "✕"}
                </StatusIcon>
                At least 1 number
              </RequirementItem>

              <RequirementItem $isCompleted={hasLowercase}>
                <StatusIcon $isCompleted={hasLowercase}>
                  {hasLowercase ? "✓" : "✕"}
                </StatusIcon>
                At least 1 lowercase letter
              </RequirementItem>

              <RequirementItem $isCompleted={hasUppercase}>
                <StatusIcon $isCompleted={hasUppercase}>
                  {hasUppercase ? "✓" : "✕"}
                </StatusIcon>
                At least 1 uppercase letter
              </RequirementItem>

              <RequirementItem $isCompleted={hasSpecialCharacter}>
                <StatusIcon $isCompleted={hasSpecialCharacter}>
                  {hasSpecialCharacter ? "✓" : "✕"}
                </StatusIcon>
                At least 1 special character
              </RequirementItem>
            </ChecklistContainer>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>

            <Input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordUpdate}
              placeholder="Confirm password"
              $hasValue={confirmPassword !== ""}
              $isValid={confirmPasswordValid}
            />

            {!confirmPasswordValid && confirmPassword !== "" && (
              <ErrorText>Passwords do not match</ErrorText>
            )}
          </InputGroup>

          <ButtonGroup>
            <SubmitButton type="submit" onClick={notify} disabled={!formValid}>
              Sign up
            </SubmitButton>

            <ResetButton
              type="button"
              onClick={handleReset}
              disabled={!isValidReset}
            >
              Reset
            </ResetButton>
          </ButtonGroup>
        </StyledForm>
      </SignUpContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px 0;

  background-color: #ebf2fa;

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const AppTitle = styled.h1`
  margin: 0 0 24px 0;

  font-size: 24px;
  font-weight: 700;

  color: #0f172a;
`;

const SignUpContainer = styled.div`
  width: 100%;
  max-width: 380px;

  padding: 28px;
  box-sizing: border-box;

  background-color: #ffffff;

  border-radius: 20px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

const TabContainer = styled.div`
  display: flex;

  padding: 4px;
  margin-bottom: 20px;

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
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "600" : "500")};

  border-radius: 8px;

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

  margin-bottom: 12px;
`;

const Label = styled.label`
  margin-bottom: 6px;

  font-size: 13px;
  font-weight: 600;

  color: #1e293b;
`;

interface InputProps {
  $hasValue: boolean;
  $isValid: boolean;
}

const Input = styled.input<InputProps>`
  padding: 9px 12px;

  background-color: #f8fafc;

  border: ${(props) =>
    props.$hasValue && !props.$isValid
      ? "2px solid #ef4444"
      : "1px solid #2563eb"};
  border-radius: 8px;

  font-size: 14px;

  color: #0f172a;
`;

const ErrorText = styled.p`
  margin: 4px 0 0 0;

  font-size: 12px;

  color: #ef4444;
`;

const ChecklistContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
  margin-top: 10px;
`;

const ChecklistTitle = styled.p`
  margin: 0 0 4px 0;

  font-size: 13px;
  font-weight: 600;

  color: #334155;
`;

const RequirementItem = styled.div<{ $isCompleted: boolean }>`
  display: flex;
  align-items: center;

  gap: 8px;

  font-size: 13px;

  color: ${(props) => (props.$isCompleted ? "#16a34a" : "#94a3b8")};

  transition: color 0.2s ease;
`;

const StatusIcon = styled.span<{ $isCompleted: boolean }>`
  font-size: 13px;
  font-weight: 700;

  color: ${(props) => (props.$isCompleted ? "#16a34a" : "#94a3b8")};
`;

const ButtonGroup = styled.div`
  display: flex;

  gap: 10px;
  margin-top: 16px;
`;

const SubmitButton = styled.button`
  flex: 1;

  padding: 11px;

  background-color: #2563eb;
  color: #ffffff;

  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:disabled {
    background-color: #94a3b8;

    cursor: not-allowed;
  }
`;

const ResetButton = styled.button`
  flex: 1;

  padding: 11px;

  background-color: #f1f5f9;
  color: #475569;

  border: 1px solid #cbd5e1;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;
