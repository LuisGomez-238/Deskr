import "./index.css";
import "./App.css";
import { useState, useEffect } from "react";
import AuthPage from "./components/AuthPage.jsx"
import VinDecoder from './components/VinDecoder.jsx';
import WorkDeal from './components/workDeal.jsx';
import Lenders from './components/Lenders.jsx';
import ChatsPage from './components/ChatsPage.jsx'


function App(){ 
  const [user, setUser] = useState(null);
  const [chatVisible, setChatVisible] = useState(true);

  useEffect(() => {
    // Check for authentication data in localStorage or sessionStorage
    const storedUser = localStorage.getItem('user'); // or sessionStorage.getItem('user');
    if (storedUser) {
      // If authentication data is found, set the user state
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuth = (userData) => {
    // Set user state and store authentication data in localStorage or sessionStorage
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // or sessionStorage.setItem('user', JSON.stringify(userData));
  };

  const handleSignOut = () => {
    setUser(null); // Reset user state to log out
    localStorage.removeItem('user'); // logs out user
  };

  const toggleChatVisibility = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className="App">
      <nav>
        <h1>Deskr.</h1>
        {user && <button className="signOut" onClick={handleSignOut}>Sign Out</button>}
      </nav>
      {user ? (
        <div className="root">
          <div className="top">
            <VinDecoder />
            <div className="deals">
            <WorkDeal />
            <WorkDeal />
            <WorkDeal />
            </div>
            <Lenders />
          </div>
          <div className="mainChat">
            <button onClick={toggleChatVisibility}>
              {chatVisible ? 'Hide Chat' : 'Show Chat'}
            </button>
            {chatVisible && <ChatsPage user={user} />}
            </div>
        </div>
      ) : (
        <AuthPage onAuth={handleAuth} />
      )}
    </div>
  );
}
export default App;