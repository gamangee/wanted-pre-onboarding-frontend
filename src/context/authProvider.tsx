import { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

function AuthProvider({ children }: { children: React.ReactNode }) {
  // 응답받은 JWT 로컬 스토리지 저장 여부
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("JWT");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Assignment 3
  // 로컬 스토리지에 토큰 저장
  const login = (token: string) => {
    localStorage.setItem("JWT", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("JWT");
    setIsAuthenticated(false);
    alert("로그아웃 되었습니다!");
  };

  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
