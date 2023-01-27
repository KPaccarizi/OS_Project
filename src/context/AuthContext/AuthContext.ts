import { createContext, useContext } from "react";

export type OptionalUserFields = Partial<UserFields>;

export interface UserFields {
  name: string;
  email: string;
}

export interface AuthContextValues {
  user: UserFields | null;
  login: () => void;
  logOut: () => void;
  isAuthenticated: boolean;
  updateUser: (fields: OptionalUserFields) => void;
}

export const AuthContext = createContext<AuthContextValues>({
  user: null,
  login: () => {},
  logOut: () => {},
  updateUser: () => {},
  isAuthenticated: false,
});

export const useAuthContext = () => {
  if (!AuthContext) {
    throw new Error("useAuthContext must be used within AuthContext");
  }

  return useContext(AuthContext);
};

export const { Provider } = AuthContext;
