import { useState, useEffect } from 'react';
import FileUpload from '../../components/FileUpload';
import Login from '../../components/Login';
import Register from '../../components/Register';


const Home = () => {

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
      <div>
          <FileUpload/>
          <Register/>
          <Login/>
      </div>
    )
}

export default Home