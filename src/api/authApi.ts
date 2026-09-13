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

export const loginUser = async (username: string, password: string) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Invalid username or password");
  }

  return result.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = (): boolean => {
  return localStorage.getItem("token") !== null;
};
