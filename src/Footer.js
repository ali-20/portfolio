import React from 'react';
import './Footer.css'
import fb from './fb.png';
import insta from './instagram.png';
import twitter from './twitter.png';
import link from './linkedin.png';
import git from './github.png';


function Footer() {

	return(

		<div className='footer shadow-5'>
			<div className='visit tc'><p>Visit me!</p></div>
			<div className='icons'>

				<div className='facebook w2 grow ma2'><a href='https://www.facebook.com/ali.rehan20'><img src={fb} alt='facebook'/></a></div>
				<div className='instagram w2 grow ma2'><a href='https://www.instagram.com/m0hammad.a1i/'><img src={insta} alt='facebook'/></a></div>
				<div className='twitter w2 grow ma2'><a href='https://twitter.com/MuhammadAli_200'><img src={twitter} alt='facebook'/></a></div>
				<div className='linkedin w2 grow ma2'><a href='https://www.linkedin.com/in/muhammad-ali-59771b177/'><img src={link} alt='facebook'/></a></div>
				<div className='github w2 grow ma2'><a href='https://github.com/ali-20'><img src={git} alt='facebook'/></a></div>

			</div>
		</div>


		);
}

export default Footer;