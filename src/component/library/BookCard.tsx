import styled from "styled-components";
import { type Book, STATUS_LABEL } from "./types";

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (bookId: string) => void;
}

export const BookCard = ({ book, onDelete, onEdit }: BookCardProps) => {
  const handleEdit = () => {
    onEdit(book);
  };

  const handleDelete = () => {
    onDelete(book.id);
  };

const renderStars = (rating: number) => {
  let stars = "";

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += "★";
    } else {
      stars += "☆";
    }
  }

  return stars;
};

  const coverImageSrc = `https://covers.openlibrary.org/b/id/10523364-M.jpg`;

  return (
    <CardContainer>
      <CoverSection>
        <CoverImage src={coverImageSrc} alt={book.title} title="book cover image"/>
      </CoverSection>

      <ContentSection>
        <HeaderRow>
          <TitleContainer>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
          </TitleContainer>

          <ActionIconsGroup>
            <IconButton type="button" onClick={handleEdit}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </IconButton>
            <IconButton type="button" onClick={handleDelete}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </IconButton>
          </ActionIconsGroup>
        </HeaderRow>

        <RatingRow>
          <StarsText>{renderStars(book.rating || 0)}</StarsText>
          <RatingValue>{(book.rating || 0)}</RatingValue>
          <StatusBadge $status={book.status}>
            {STATUS_LABEL[book.status]}
          </StatusBadge>
        </RatingRow>

        <DetailsRow>
          <PagesText>{book.pages} pages</PagesText>
          <IdBookText>book ID: {book.id}</IdBookText>
        </DetailsRow>
      </ContentSection>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 340px;
  padding: 14px;
  box-sizing: border-box;

  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
`;

const CoverSection = styled.div`
  width: 68px;
  height: 96px;
  flex-shrink: 0;

  border-radius: 6px;
  overflow: hidden;
  background-color: #f1f5f9;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

const BookTitle = styled.h3`
  margin: 0;

  font-size: 14px;
  font-weight: 700;
  color: #0f172a;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookAuthor = styled.span`
  margin-top: 2px;

  font-size: 12px;
  color: #64748b;
`;

const ActionIconsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px;

  background: none;
  border: none;
  border-radius: 4px;

  color: #94a3b8;

  cursor: pointer;

  &:hover {
    color: #475569;
    background-color: #f1f5f9;
  }
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;

  gap: 6px;
  margin-top: 8px;
`;

const StarsText = styled.span`
  font-size: 13px;
  color: #f59e0b;
`;

const RatingValue = styled.span`
  margin-right: 4px;

  font-size: 12px;
  font-weight: 600;

  color: #334155;
`;

const StatusBadge = styled.span<{ $status: string }>`
  padding: 3px 8px;

  background-color: ${(props) =>
    props.$status === "finished"
      ? "#dcfce7"
      : props.$status === "reading"
      ? "#eff6ff"
      : "#f1f5f9"};

  color: ${(props) =>
    props.$status === "finished"
      ? "#166534"
      : props.$status === "reading"
      ? "#2563eb"
      : "#475569"};

  border-radius: 999px;

  font-size: 11px;
  font-weight: 600;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
  margin-top: 10px;
`;

const PagesText = styled.span`
  font-size: 12px;
  font-weight: 600;

  color: #334155;
`;

const IdBookText = styled.span`
  font-size: 10px;

  color: #94a3b8;
`;