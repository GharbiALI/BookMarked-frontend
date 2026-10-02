import { type Book } from "./types";

export interface LibraryState {
  books: Book[];
  formOpen: boolean;
  editingBook: Book | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: LibraryState = {
  books: [],
  formOpen: false,
  editingBook: null,
  isLoading: true,
  error: null,
};

export function libraryReducer(state: LibraryState, action: any): LibraryState {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };

    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, books: action.payload };

    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };

    case "OPEN_ADD_FORM":
      return { ...state, formOpen: true, editingBook: null };

    case "CLOSE_FORM":
      return { ...state, formOpen: false, editingBook: null };

    case "OPEN_EDIT_FORM":
      return { ...state, formOpen: true, editingBook: action.payload };

    case "SAVE_SUCCESS": {
      if (state.editingBook) {
        return {
          ...state,
          books: state.books.map((b) => (b.id === action.payload.id ? action.payload : b)),
          formOpen: false,
          editingBook: null,
        };
      } else {
        return {
          ...state,
          books: [...state.books, action.payload],
          formOpen: false,
          editingBook: null,
        };
      }
    }

    case "DELETE_SUCCESS":
      return { ...state, books: state.books.filter((b) => b.id !== action.payload) };

    default:
      return state;
  }
}