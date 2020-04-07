import React from 'react';
import './Header.css';
import profile from './profile.jpg';
import logo from './logo.png';
import logo2 from './logo2.png';
import ProCard from './Pro_card';
import Footer from './Footer';


function Header () {

	return(

		<div>
			<div className='Text bg-light-green br3 shadow-5'>
				<div className='info'>
			 		<h1>Hi! I'm Muhammad Ali</h1>
			 		<p>The web Developer you need</p>
			 		<button className='tc more grow shadow-5 br-100-1'><a href=''>Learn More</a></button>
			 	</div>

			 	<img className='profile' src={profile} alt='profilepic'/>
			 	
			 	
			</div>
			
			
			<p className='tagline'>Here are few of my projects to checkout!</p>
			<ProCard logo={logo} live='https://ali-20.github.io' source='https://github.com/ali-20/ali-20.github.io'/>
			<ProCard logo={logo2}/>
			<Footer/>



		</div>



		);
}

export default Header;