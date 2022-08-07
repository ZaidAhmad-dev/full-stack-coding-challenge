import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../App';

const Login = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AppContext);
    const [userName, setUserName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userName === '') {
            alert('Please enter a username');
            return;
        }
        try {
            const res = await fetch('http://localhost:4000/users/' + userName);
            const data = await res.json();
            setLoggedInUser(data);
            Navigate('/dashboard');           
        } catch (error) {
            return error;
        }
 
    }
  
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} minLength="3" maxLength="20" required />
                <input type="password" name="password" placeholder="password" minLength="3" maxLength="20" required />
                <button className='btn btn-primary' type="submit">Login</button>
            </form>
        </div>
  )
}

export default Login