import useAuthStore from "./store";

const LoginStatus = () => {
  const { user, Login, Logout } = useAuthStore();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => Logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );

  return (
    <div>
      <a onClick={() => Login("John Smith")} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
