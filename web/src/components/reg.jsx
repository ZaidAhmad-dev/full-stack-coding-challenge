import { useState } from 'react';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // using /create route to create a new user
        try {
            const res = await fetch('http://localhost:4000/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            setUser(data);
        } catch (error) {
            return error;
        }
        
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} />
                <input type="password" name="password" placeholder="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} />
                <button className='btn' type="submit">Register</button>
            </form>
        </div>
  )
}

export default Register