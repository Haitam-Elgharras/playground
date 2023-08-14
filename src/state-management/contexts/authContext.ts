import React from "react";
import { AuthAction } from "../reducers/authReducer";

interface authContextType {
  user: string;
  disptach: React.Dispatch<AuthAction>;
}

const authContext = React.createContext<authContextType>({} as authContextType);

export default authContext;
