import axios from "axios";
import { createContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const apiURL = process.env.EXPO_PUBLIC_API_URL;
  const [user, setUser] = useState('');
  const [acessToken, setAcessToken] = useState('');
  const [globalLoading, setGlobalLoading] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      setGlobalLoading(true);
      const storageToken = await AsyncStorage.getItem("@asyncStorage:refreshToken");

      if (storageToken) {
        try {
          const isLogged = await axios.post(`${apiURL}/users/refresh`, {
            refreshToken: JSON.parse(storageToken)
          });
          if (isLogged) {
            const userById = await axios.get(`${apiURL}/users/${isLogged.data.refreshToken.user_id}`, {
              headers: {
                Authorization: `Bearer ${isLogged.data.token}`
              }
            });
            setAcessToken(isLogged.data.token);
            const { password, ...userWithoutPassword } = userById.data.user;
            setUser(userWithoutPassword);
          }
        } catch (error) {
          setPopUpMessage("Faça login novamente");
          setTimeout(() => {
            setPopUpMessage(null);
          }, 3000);
          AsyncStorage.clear();
        }
      }
      setGlobalLoading(false);
    };
    loadingStoreData();
  }, []);

  const signIn = async (name, password) => {
    const isLogged = await axios.post(`${apiURL}/users/login/ `, {
      name: name,
      password: password,
    });
    if (isLogged) {
      setAcessToken(isLogged.data.token);
      const { password, ...userWithoutPassword } = isLogged.data.user;
      setUser(userWithoutPassword);
      await AsyncStorage.setItem('@asyncStorage:refreshToken', JSON.stringify(isLogged.data.refreshToken.token));
    }
  }

  // const signOut = () => {
  //   delete axios.defaults.headers.common["Authorization"];
  //   AsyncStorage.clear();
  //   setUser(null);
  // };

  const getUsers = async () => {
    setGlobalLoading(true);
    const response = await axios.get(`${apiURL}/users`, {
      headers: {
        Authorization: `Bearer ${acessToken}`
      }
    });
    setGlobalLoading(false);
    return response.data.users;
  };

  // const creationUser = async (name, email, password) => {
  //   setGlobalLoading(true);
  //   const response = await axios.post(`${apiURL}/users`, {
  //     name: name,
  //     email: email,
  //     password: password
  //   });
  //   setGlobalLoading(false);
  //   return response.data;
  // };

  const teste = async () => {
    await axios.get(`${apiURL}/users`);
    console.log('teste');
  }

  return (
    <AuthContext.Provider value={{ setUser, signIn, getUsers, globalLoading, popUpMessage, teste }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;