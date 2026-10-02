import { type Book } from "../component/library/types";

const API_URL = "http://localhost:4000/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const fetchBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch books");
  }

  return result.data;
};

export const fetchBook = async (id: string): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to fetch book");
  }

  return result.data;
};

export const createBook = async (
  bookData: Omit<Book, "id">,
): Promise<Book> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(bookData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create book");
  }

  return result.data;
};

export const updateBook = async (
  id: string,
  bookData: Omit<Book, "id">,
): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(bookData),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to update book");
  }

  return result.data;
};

export const deleteBook = async (id: string): Promise<{ id: string }> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to delete book");
  }

  return result.data;
};