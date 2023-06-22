import { createContext } from "react";
import { LoginStatus } from "../types";

export const LoginContext = createContext<LoginStatus>({
  isLoggedIn: false,
  name: "",
  picture: "",
});
