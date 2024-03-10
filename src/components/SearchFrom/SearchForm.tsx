import { useState } from "react";
import "./styles.css";

interface SearchFormProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export function SearchForm({ searchValue, setSearchValue }: SearchFormProps) {
  const [inputFilled, setInputFilled] = useState(false);

  const clearInput = () => {
    setSearchValue("");
    setInputFilled(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchValue(value);
    setInputFilled(value.length > 0);
  };

  return (
    <div className="searchForm">
      <form>
        <input
          type="text"
          placeholder="Enter the user name"
          value={searchValue}
          onChange={handleInputChange}
        />
        {inputFilled && (
          <button
            className="clear-btn"
            type="button"
            onClick={clearInput}
          ></button>
        )}
      </form>
    </div>
  );
}
