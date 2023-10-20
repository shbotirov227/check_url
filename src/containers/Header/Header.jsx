import React from 'react'
import { ExitIcon, Logo } from "../../assets/images/icon";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header">
			<Link to="/user"><Logo /></Link>

			<div className="Header-right">
				<Link to="/sign-in" className="signin-btn">Login <ExitIcon /></Link>
				<Link to="/sign-up" className="signup-btn">Register Now</Link>
			</div>
		</div>
	)
}

export default Header;