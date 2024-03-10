import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";

export function SearchResults() {
  const { users, error } = useContext(SearchContext);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div className="usersList">
      {users.length === 0 && "No results"}
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
