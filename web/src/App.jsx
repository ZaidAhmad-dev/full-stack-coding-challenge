import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import './App.css';
import { db } from './config';

function App() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');

  useEffect(()=> {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data)
    }

    getUsers();

  },[])

  return (
    <div className="App">
      hello
    </div>
  )
}

export default App
