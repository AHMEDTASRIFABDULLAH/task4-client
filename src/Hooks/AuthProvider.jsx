import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isUser, setIsUser] = useState(() => {
    const saved = sessionStorage.getItem("isUser");
    return saved === "true";
  });
  const [LoginEmail, setLoginEmail] = useState();
  useEffect(() => {
    sessionStorage.setItem("isUser", isUser);
  }, [isUser]);
  const authInfo = {
    isUser,
    setIsUser,
    LoginEmail,
    setLoginEmail,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
