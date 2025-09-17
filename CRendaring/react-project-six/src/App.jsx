import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <LoginBtn />;
  }

  return (
    <div>
      <h1> Welcome Everyone</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  );
}

export default App;