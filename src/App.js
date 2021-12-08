import { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  return (
    <UserContext.Provider value={{
      loginState: [loggedInUser, setLoggedInUser],
      registerState: [isRegister, setIsRegister]
    }}>
      <Home />
    </UserContext.Provider>
  );
}

export default App;
