import React, { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import Dashboard from './Dashboard/Dashboard';
import LinkView from './Links/LinkView';
import EditLink from './Links/EditLink';
import NewLink from './Links/NewLink';


type User = string | "null";
export const UserContext = createContext<User>("null");

const App: React.FC = () => {
  const [userId, setUserId] = useState<User>("null");
  return (
      <UserContext.Provider value={ [userId, setUserId] }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/links" element={<LinkView />} />
        <Route path="/linksEdit" element={<EditLink />} />
        <Route path="/newLink" element={<NewLink />} />
      </Routes>
    </UserContext.Provider>
  )
}

export default App
