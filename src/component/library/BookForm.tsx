import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { type Book, type ReadStatus } from "./types";

interface BookFormProps {
  editingBook: Book | null;
  onClose: () => void;
  onSave: (book: Book) => void;
}

export const BookForm = ({
  editingBook,
  onClose,
  onSave,
}: BookFormProps) => {
  const [title, setTitle] = useState<string>(
    editingBook !== null ? editingBook.title : ""
  );
  const [author, setAuthor] = useState<string>(
    editingBook !== null ? editingBook.author : ""
  );
  const [genre, setGenre] = useState<string>(
    editingBook !== null ? editingBook.genre : ""
  );
  const [pages, setPages] = useState<string>(
    editingBook !== null ? String(editingBook.pages) : ""
  );
  const [status, setStatus] = useState<ReadStatus>(
    editingBook !== null ? editingBook.status : "to-read"
  );
  const [rating, setRating] = useState<string>(
    editingBook !== null ? String(editingBook.rating) : "0"
  );

  const handleTitleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAuthorUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleGenreUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(e.target.value);
  };

  const handlePagesUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPages(e.target.value);
  };

  const handleStatusUpdate = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value as ReadStatus);
  };

  const handleRatingUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(e.target.value);
  };

  const isTitleValid = title.trim().length >= 2;
  const isAuthorValid = author.trim().length >= 2;
  const isPagesValid = pages !== "" && Number(pages) > 0;
  const isRatingValid =
    rating !== "" && Number(rating) >= 0 && Number(rating) <= 5;

  const formValid =
    isTitleValid && isAuthorValid && isPagesValid && isRatingValid;

  const sendInformation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const notify = () => {
    if (!formValid) return;

    const isEditing = editingBook !== null;

    toast.success(
      isEditing ? "Book updated successfully!" : "Book added successfully!",
      {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        theme: "light",
      }
    );

    setTimeout(() => {
      onSave({
        id: isEditing ? editingBook.id : "",
        title: title.trim(),
        author: author.trim(),
        genre: genre.trim(),
        pages: Number(pages),
        status,
        rating: Number(rating),
      });
    }, 1500);
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ToastContainer />
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          {editingBook !== null ? "Edit Book" : "Add New Book"}
        </ModalHeader>

        <StyledForm action="#" method="post" onSubmit={sendInformation}>
          <InputGroup>
            <Label htmlFor="title">Title *</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={handleTitleUpdate}
              placeholder="e.g. To Kill a Mockingbird"
              $hasValue={title !== ""}
              $isValid={isTitleValid}
            />
            {!isTitleValid && title !== "" && (
              <ErrorText>Title must be at least 2 characters</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="author">Author *</Label>
            <Input
              type="text"
              id="author"
              value={author}
              onChange={handleAuthorUpdate}
              placeholder="e.g. Harper Lee"
              $hasValue={author !== ""}
              $isValid={isAuthorValid}
            />
            {!isAuthorValid && author !== "" && (
              <ErrorText>Author name must be at least 2 characters</ErrorText>
            )}
          </InputGroup>

          <InputGroup>
            <Label htmlFor="genre">Genre</Label>
            <Input
              type="text"
              id="genre"
              value={genre}
              onChange={handleGenreUpdate}
              placeholder="e.g. Fiction"
              $hasValue={genre !== ""}
              $isValid={true}
            />
          </InputGroup>

          <TwoColumnRow>
            <InputGroup>
              <Label htmlFor="pages">Pages *</Label>
              <Input
                type="number"
                id="pages"
                min="1"
                value={pages}
                onChange={handlePagesUpdate}
                placeholder="300"
                $hasValue={pages !== ""}
                $isValid={isPagesValid}
              />
              {!isPagesValid && pages !== "" && (
                <ErrorText>Must be {">"} 0</ErrorText>
              )}
            </InputGroup>

            <InputGroup>
              <Label htmlFor="rating">Rating (0-5) *</Label>
              <Input
                type="number"
                id="rating"
                min="0"
                max="5"
                value={rating}
                onChange={handleRatingUpdate}
                placeholder="5"
                $hasValue={rating !== ""}
                $isValid={isRatingValid}
              />
              {!isRatingValid && rating !== "" && (
                <ErrorText>0 to 5 only</ErrorText>
              )}
            </InputGroup>
          </TwoColumnRow>

          <InputGroup>
            <Label htmlFor="status">Status</Label>
            <Select
              id="status"
              value={status}
              onChange={handleStatusUpdate}
            >
              <option value="to-read">To Read</option>
              <option value="reading">Reading</option>
              <option value="finished">Finished</option>
            </Select>
          </InputGroup>

          <ButtonGroup>
            <SubmitButton
              type="submit"
              onClick={notify}
              disabled={!formValid}
            >
              {editingBook !== null ? "Save Changes" : "Add Book"}
            </SubmitButton>

            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
          </ButtonGroup>
        </StyledForm>
      </ModalCard>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(15, 23, 42, 0.4);
  padding: 20px;
  box-sizing: border-box;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const ModalCard = styled.div`
  width: 100%;
  max-width: 380px;

  padding: 28px;
  box-sizing: border-box;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
`;

const ModalHeader = styled.h2`
  margin: 0 0 20px 0;

  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
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

const TwoColumnRow = styled.div`
  display: flex;
  gap: 12px;

  & > * {
    flex: 1;
  }
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
  color: #0f172a;
  font-size: 14px;

  border: ${(props) =>
    props.$hasValue && !props.$isValid
      ? "2px solid #ef4444"
      : "1px solid #2563eb"};
  border-radius: 8px;

  outline: none;

  &:focus {
    border-width: 2px;
  }
`;

const Select = styled.select`
  padding: 9px 12px;

  background-color: #f8fafc;
  color: #0f172a;
  font-size: 14px;

  border: 1px solid #2563eb;
  border-radius: 8px;

  outline: none;
`;

const ErrorText = styled.p`
  margin: 4px 0 0 0;

  font-size: 12px;
  color: #ef4444;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  margin-top: 12px;
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

const CancelButton = styled.button`
  flex: 1;

  padding: 11px;

  background-color: #f1f5f9;
  color: #475569;

  border: 1px solid #cbd5e1;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;