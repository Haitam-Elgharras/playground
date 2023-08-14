interface LoginAction {
  type: "LOGIN";
  name: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return action.name;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

export default authReducer;
