import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
