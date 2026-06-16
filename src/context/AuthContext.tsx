import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;

  login: (
    email: string,
    password: string
  ) => void;

  logout: () => void;
}

const AuthContext =
  createContext<AuthContextType | null>(
    null
  );

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  const [user, setUser] =
    useState<User | null>(null);

  const login = (
    email: string,
    password: string
  ) => {
    setIsLoggedIn(true);

    setUser({
      name: "Ravi Kumar",
      email,
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};