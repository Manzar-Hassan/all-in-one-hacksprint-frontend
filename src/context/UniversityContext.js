import { createContext, useState } from "react";

const UniversityContext = createContext("");

export const UniversityContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginUser, setLoginUser] = useState("");

  return (
    <UniversityContext.Provider
      value={{
        loading,
        setLoading,
        loginUser,
        setLoginUser,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UniversityContext.Provider>
  );
};

export default UniversityContext;
