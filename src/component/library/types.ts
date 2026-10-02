export type ReadStatus = "reading" | "to-read" | "finished";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  pages: number;
  status: ReadStatus;
  rating: number;
}

export const STATUS_LABEL: Record<ReadStatus, string> = {
  reading: "Reading",
  "to-read": "To read",
  finished: "Finished",
};

export const initialBooks: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    pages: 320,
    status: "to-read",
    rating: 0,
  },
];