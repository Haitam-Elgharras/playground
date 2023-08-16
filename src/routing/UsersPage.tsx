import { Outlet } from "react-router-dom";
import UserListPage from "./UserList";

const UsersPage = () => {
  return (
    <div className="row">
      <div className="col">
        <UserListPage />
      </div>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UsersPage;
