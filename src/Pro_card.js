import React from 'react';
import './Pro_card.css';


function ProCard (props) {

	return (

		<div className='project tc shadow-5 br3 grow-large bg-light-blue'>

			<img src={props.logo} alt='projectlogo'/>
			<button className='but1 grow shadow-5'><a href={props.live}>See live</a></button>
			<button className='but2 grow shadow-5'><a href={props.source}>Source Code</a></button>
				

		</div>


		);
}

export default ProCard;