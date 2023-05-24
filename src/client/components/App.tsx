import React, { createContext, useState } from 'react';
import HomePage from './Homepage/HomePage';

type User = string | "null";
export const UserContext = createContext<User>("null");

const App =() => {
  const [userid, setUserId] = useState<User>("null");

  return (
    <UserContext.Provider value={{ setUserId }}>
      < HomePage />
    </UserContext.Provider>
}

export default App
