import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { useApi } from "./api/Api";

export default function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { users, error } = useApi(searchValue);

  return (
    <SearchContext.Provider value={{ users, error, searchValue }}> 
      <SearchForm searchValue={searchValue} setSearchValue={setSearchValue}/>
      <SearchResults />
    </SearchContext.Provider>
  );
}
