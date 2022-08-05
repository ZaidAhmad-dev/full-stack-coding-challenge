import { Link } from "react-router-dom"

const Navbar = () => {
  return (
        <nav>
			<div className="nav-wrapper">
				<Link to="/products">Products</Link>
				<ul className="nav-list">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/dashboard">Dashboard</Link></li>
					<li><Link to="/dashboard">Zaid</Link>
						<ul>
							<li><Link to="/name">Logout</Link></li>
						</ul>
					</li>
				</ul>
			</div>
        </nav>
  )
}

export default Navbar