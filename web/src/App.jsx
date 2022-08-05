import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
import Products from './components/Products';

function App() {
  
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/dashboard" element={<Dashboard/>} >
            <Route path="register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path="products" element={<Products/>} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
