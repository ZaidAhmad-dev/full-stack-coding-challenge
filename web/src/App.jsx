import { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(()=> {

    const getUsers = async () => {
      const res = await fetch('http://localhost:4000/users');
      const data = await res.json();
      setUsers(data);
    }

    // getUsers();

  },[])

  return (
    <div className="App">
      <Register/>
      <Login/>
    </div>
  )
}

export default App
