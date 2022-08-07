import './App.css';
import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';

export const AppContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div className="App">
      <AppContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} >
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="products" element={<Products/>} />
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App
