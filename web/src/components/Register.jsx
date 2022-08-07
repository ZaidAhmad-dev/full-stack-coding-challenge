import { useState } from 'react';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.username === '' || user.password === '') {
            alert('Please enter a username and password');
            return;
        }
        try {
            // checking if the user already exists
            const responseUserAlreadyExist = await fetch('http://localhost:4000/users/' + user.username);
            const dataUserAlreadyExists = await responseUserAlreadyExist.json();
            if (dataUserAlreadyExists.length > 0) {
                alert('User already exists');
                return;
            }
            const res = await fetch('http://localhost:4000/createuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            // checking res status and alerting user
            if (res.status === 200) {
                alert('User created successfully');
            } else {
                alert('User already exists');
            }
            const data = await res.json();
            setUser(data);
        } catch (error) {
            return error;
        }
        
    }
  
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="username" value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} minLength="3" maxLength="20" required />
                <input type="password" name="password" placeholder="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} minLength="3" maxLength="20" required />
                <button className='btn' type="submit">Register</button>
            </form>
        </div>
  )
}

export default Register