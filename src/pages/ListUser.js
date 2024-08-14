import { Link } from "react-router-dom";
import UserList from "../components/UserList";

const ListUser = () => {
    return (
      <div>
        <UserList /><br />
        <Link to="/">Home</Link>
      </div>
    );
  };
  
  export default ListUser;