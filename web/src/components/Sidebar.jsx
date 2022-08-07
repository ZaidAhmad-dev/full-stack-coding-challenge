import { GiHamburgerMenu } from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom"
import { useState } from 'react';

const Sidebar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <div className='sidebar'>
        <div className={`sidebar-wrapper ${showMenu ? 'show-sidebar' : ''}`}>
            <div className="sidebar-content">
                <div className="sidebar-item">
                    <div className="sidebar-item-header">
                        <h1><Link to="/">Dashboard</Link></h1>
                    </div>
                    <div className="sidebar-item-content">
                        <ul className="sidebar-item-list">
                            <li><Link to="/dashboard/register">Register</Link></li>
                            <li><Link to="/dashboard/login">Login</Link></li>
                            <li><Link to="/dashboard/products">Products</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="hamburger-icon">
            {showMenu ? <AiOutlineClose onClick={() => setShowMenu(false)} /> : <GiHamburgerMenu onClick={() => setShowMenu(true)} />}
        </div>
    </div>
  )
}

export default Sidebar