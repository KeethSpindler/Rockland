import React from 'react';
import '../assets/css/style.css';
const logo = require('../assets/logo-header.png');
const cart = require('../assets/shopping-full.png');

const Navbar = () => {
	return (
		<nav className='navbar navbar-light bg-rockland container'>
			<div>
				<a
					className='navbar-brand'
					href='https://rockland-inc.com/Default.aspx'
				>
					<img src={logo.default} alt='logo' />
				</a>
			</div>
			<div style={{ fontSize: '.8rem' }}>
				<div>
					<img src={cart.default} alt='' />
					<a
						className='nav-link d-inline text-light'
						href='https://rockland-inc.com/login.aspx?refURL=/Default.aspx'
					>
						My Rockland
					</a>
				</div>
				<ul className='navbar-nav d-flex flex-row px-2'>
					<li className='nav-item m-1'>
						<a
							className='nav-link text-light'
							aria-current='page'
							href='https://rockland-inc.com/login.aspx?refURL=/Default.aspx'
						>
							Log In |
						</a>
					</li>
					<li className='nav-item m-1'>
						<a
							className='nav-link text-light'
							href='https://rockland-inc.com/Register.aspx'
						>
							Register |
						</a>
					</li>
					<li className='nav-item m-1'>
						<a
							className='nav-link text-light'
							href='https://rockland-inc.com/ContactUs.aspx'
						>
							Contact Us
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
