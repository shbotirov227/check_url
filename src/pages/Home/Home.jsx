import React from 'react'

import Header from "../../containers/Header";
import Footer from "../../containers/Footer";

import "./Home.scss";
import { LinkIcon } from "../../assets/images/icon";

const Home = () => {
	return (
		<div className="Home container">
			<Header />

			<div className="Home-top">
				<h2 className="Home-title">Shorten Your Loooong Links :)</h2>
				<p className="Home-text">Linkly is an efficient and easy-to-use URL shortening service that streamlines your<br></br> online experience.</p>
				
				<div className="Home-search">
					<LinkIcon />
					<input className="Home-input" type="text" placeholder="Enter the link here"/>
					<button className="Home-input-btn">Shorten Now!</button>
				</div>
			</div>
			
			<Footer />
		</div>
	)
}

export default Home;