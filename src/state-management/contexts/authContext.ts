import React from "react";
import { AuthAction } from "../reducers/authReducer";

interface authContextType {
  user: string;
  disptach: React.Dispatch<AuthAction>;
}

const AuthContext = React.createContext<authContextType>({} as authContextType);

export default AuthContext;