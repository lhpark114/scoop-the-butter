import React, { useEffect, useState } from 'react';
import { createContext, useContext } from 'react';
import { login, logout, onUserStateChanged } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return <AuthContext.Provider 
  value={({user, uid: user && user.uid, login: login, logout:logout})}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
