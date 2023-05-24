import React, { createContext, useState } from 'react';
import HomePage from './Homepage/HomePage';

type User = string | "null";
export const UserContext = createContext<User>("null");

const App =() => {
  const [userId, setUserId] = useState<User>("null");

  return (
    <UserContext.Provider value={ [userId, setUserId] }>
      < HomePage />
    </UserContext.Provider>
}

export default App
