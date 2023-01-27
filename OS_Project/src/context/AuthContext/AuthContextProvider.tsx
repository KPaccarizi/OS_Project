import React, { useEffect, useState } from "react";

import {
  UserFields,
  AuthContext,
  AuthContextValues,
  OptionalUserFields,
} from "./AuthContext";

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserFields | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const storageValue = localStorage.getItem("authenticated");

      try {
        if (!storageValue || storageValue === "false") {
          return;
        }

        setUser({
          email: "borgoth@mordos.com",
          name: "Borgoth",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    void checkAuthentication();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateUser = (fields?: OptionalUserFields) => {
    if (!fields) {
      return;
    }

    setUser((prev) => {
      return { ...prev, ...fields } as UserFields;
    });
  };

  const logOut = () => {
    localStorage.removeItem("authenticated");
    setUser(null);
  };

  const login = () => {
    localStorage.setItem("authenticated", "true");

    setUser({
      email: "borgoth@mordos.com",
      name: "Borgoth",
    });
  };

  const context: AuthContextValues = {
    user,
    login,
    logOut,
    updateUser,
    isAuthenticated: user !== null,
  };

  return (
    <AuthContext.Provider value={context}>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          Loading...
        </div>
      ) : (
        props.children
      )}
    </AuthContext.Provider>
  );
};
