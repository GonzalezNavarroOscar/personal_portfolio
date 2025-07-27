import { createContext, useState, useContext, useEffect } from 'react';
import { loginApi, registerApi } from '../utils/getApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if(token){
        setUser({token});
    }
    setLoading(false);

  }, [])

  const register = async (user_data) => {

    try{
      await registerApi(user_data);

      return {success: true};

    }
    catch(error){
      return{success: false};
    }

  };

  const login = async (credentials) => {

    try{
        const response = await loginApi(credentials);

        localStorage.setItem('authToken', response.token);

        setUser({token: response.token, ...response.user});

        return {success: true};

    }
    catch (error){

        return{success: false};

    }
  };

  const logout = () => {
    localStorage.clear()
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,register, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);