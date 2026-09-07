const API_URL = "http://localhost:4000/api";

export const signInUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const response = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  const result = await response.json();

  return result;
};
