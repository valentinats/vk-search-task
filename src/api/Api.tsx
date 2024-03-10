import { useEffect, useState, useRef } from "react";
import "../components/UserCard/style.css";

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

export const useApi = (searchValue: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debouncedSearchValue = useRef(searchValue);

  useEffect(() => { 
    const fetchData = async () => {
        setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/users/?limit=100`);
        const data = await response.json();

        if (Array.isArray(data.users)) {
          const usersData = data.users.map((userData: User) => userData);
          const filteredUsers = debouncedSearchValue.current
            ? usersData.filter((user: User) =>
                user.firstName
                  .toLowerCase()
                  .includes(debouncedSearchValue.current.toLowerCase())
              )
            : [];
          setUsers(filteredUsers);
          setError(null);
        } else {
          setError("Data received is not an array");
        }
      } catch (error) {
        setError("Error fetching data. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(() => {
      debouncedSearchValue.current = searchValue;
      fetchData();
    }, 300);

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [searchValue]);

  return { users, loading, error };
};

export default useApi;
