import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
        <div className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-item">
                    <div className="sidebar-item-header">
                        <h1>Dashboard</h1>
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
  )
}

export default Sidebar