import { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { BookCard } from "./BookCard";
import { BookForm } from "./BookForm";
import { type Book, initialBooks } from "./types";

export const Library = () => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const [formOpen, setFormOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const openAddForm = () => {
    setEditingBook(null);
    setFormOpen(true);
  };

  const openEditForm = (book: Book) => {
    setEditingBook(book);
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
    setEditingBook(null);
  };

  const handleSave = (bookData: Omit<Book, "id">) => {
    if (editingBook) {
      setBooks((prev) =>
        prev.map((b) =>
          b.id === editingBook.id ? { ...bookData, id: b.id } : b,
        ),
      );
    } else {
      const newBook: Book = { ...bookData, id: Date.now().toString() };
      setBooks((prev) => [...prev, newBook]);
    }
    closeForm();
  };

  const handleDeleteBook = (id: string) => {
    const bookToDelete = books.find((b) => b.id === id);

    setBooks((prev) => prev.filter((b) => b.id !== id));

    toast.error(
      bookToDelete
        ? `"${bookToDelete.title}" removed successfully!`
        : "Book deleted successfully!",
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        theme: "light",
      }
    );
  };

  return (
    <PageContainer>
      <ToastContainer />
      <Header />

      <Main>
        <TopBar>
          <Title>My library</Title>
          <AddButton type="button" onClick={openAddForm}>
            + Add book
          </AddButton>
        </TopBar>
        {books.length === 0 ? (
          <EmptyState>Your library is empty — add your first book.</EmptyState>
        ) : (
          <BookContainer>
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onEdit={openEditForm}
                onDelete={handleDeleteBook}
              />
            ))}
          </BookContainer>
        )}
      </Main>

      <Footer />

      {formOpen && (
        <BookForm
          editingBook={editingBook}
          onClose={closeForm}
          onSave={handleSave}
        />
      )}
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #ebf2fa;

`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  box-sizing: border-box;
`;

const TopBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 16px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  margin: 0;

  font-size: 26px;
  font-weight: 700;

  color: #0f172a;
`;

const AddButton = styled.button`
  padding: 10px 18px;

  background-color: #2563eb;
  color: #ffffff;

  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const BookContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const EmptyState = styled.div`
  padding: 60px 20px;
  text-align: center;
  color: #64748b;
  font-size: 14px;
`;