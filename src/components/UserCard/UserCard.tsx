import "./style.css";

export interface UserData {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  address: {
    address: string;
    city: string;
  };
}

export function UserCard(props: UserData) {
  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
