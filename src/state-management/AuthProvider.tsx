import { ReactNode, useReducer } from "react";
import authContext from "./contexts/authContext";
import authReducer from "./reducers/authReducer";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, disptach] = useReducer(authReducer, "");
  return (
    <authContext.Provider value={{ user, disptach }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
