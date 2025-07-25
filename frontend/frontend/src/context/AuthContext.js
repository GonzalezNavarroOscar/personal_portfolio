import { createContext, useState, useContext, useEffect } from 'react';
import { loginApi } from '../utils/getApi';

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
    localStorage.removeItem('authToken')
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);