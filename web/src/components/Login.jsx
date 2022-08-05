import { useState } from 'react';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:4000/users/' + userName);
        const data = await res.json();
        setLoggedInUser(data);
    }
  
    return (
        <div>
             <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                <input type="password" name="password" placeholder="password" />
                <button className='btn btn-primary' type="submit">Login</button>
            </form>
        </div>
  )
}

export default Login