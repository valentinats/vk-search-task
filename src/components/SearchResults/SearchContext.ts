import { createContext } from "react";

interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: {
    address: string;
    city: string;
  };
}

interface SearchContextType {
  users: User[];
  error: string | null;
  searchValue: string;
}

export const SearchContext = createContext<SearchContextType>({
  users: [],
  error: null,
  searchValue: "",
});
