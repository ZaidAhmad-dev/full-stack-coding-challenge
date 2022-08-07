import { useContext } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../App";

const Navbar = () => {
    const { loggedInUser, setLoggedInUser } = useContext(AppContext);
  	return (
  	      <nav>
				<div className="nav-wrapper">
					<ul className="nav-list">
						<li><Link to="/">Home</Link></li>
						<li> Welcome <strong>{loggedInUser ? loggedInUser[0].username : 'Guest'}</strong>
							<ul className="user-list">
								<li> {loggedInUser ? <button className="btn" onClick={() => {setLoggedInUser(null)}}>Logout</button> : <Link to="/dashboard/login">Login</Link>} </li>
							</ul>
						</li>
					</ul>
				</div>
  	      </nav>
  	)
}

export default Navbar