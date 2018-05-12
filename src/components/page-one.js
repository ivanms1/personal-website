import React from 'react';
import { Link } from 'react-scroll';

import Navbar from './navbar';
import MobileNavbar from './mobile-navbar';

export default function PageOne({position, width, remove}) {
	return (
		<div className='page-one-navbar'>
		{width <= 800 ? <MobileNavbar remove={remove} position={position}/> : <Navbar position={position}/>}
		<div onClick={remove} className="page-one">
			<img className="port-pic" src="../pics/pic2.jpg" alt="Ivan Saldano"/>
			<img className="big-logo" src="./pics/logo.png" alt="logo-ivan"/>
			<h3 className='subtitle'>Full Stack Developer</h3>
			<Link activeClass="active" to="page-four" spy={true} smooth={true} offset={-10} duration={700}>
					<h3 className='hire-me'>Hire Me</h3>
			</Link>
		</div>
		</div>
		)
}