import { useContext } from "react";
import authContext from "./contexts/authContext";

const LoginStatus = () => {
  const { user, disptach } = useContext(authContext);

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => disptach({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );

  return (
    <div>
      <a
        onClick={() => disptach({ type: "LOGIN", name: "John smith" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
