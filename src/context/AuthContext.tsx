import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

type ContextState = {
  setAuth: Function;
  logout: Function;
  login: Function;
  auth: string | null;
  register: Function;
};
const AuthContext = createContext({} as ContextState);

type Token = {
  authtoken: string;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<string | null>(null);
  const navigate = useNavigate();
  const getToken: string | any = localStorage?.getItem("token") || null;
  if (getToken !== null || getToken === undefined) {
    const finalToken = JSON.parse(getToken) || null;
    console.log(getToken);
  }
  const login = async (text: string, password: string, route: Object) => {
    try {
      const response = await axios.post<Token>("", {
        email: text,
        password: password,
      });
      if (response) {
        console.log({ response });
        const authToken = response?.data?.authtoken;
        setAuth(authToken);
        localStorage.setItem("token", JSON.stringify(authToken));
        // navigate(route?.from ? route : "/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  };
  const register = async (text: string, email: string, password: string) => {
    try {
      const response = await axios.post("", {
        name: text,
        email: email,
        password: password,
      });
      if (response) {
        console.log(response?.data?.message);
        navigate("/");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
      }
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(null);
  };
  return (
    <AuthContext.Provider value={{ setAuth, logout, login, auth, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
