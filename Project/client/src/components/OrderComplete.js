import React from 'react';
const signature = require('../assets/keeth-signature.png');

const OrderComplete = () => {
	return (
		<div className='container mt-2'>
			<section>
				<h2 className='h2 text-danger m-0 p-0'>Order Placed!</h2>
				<hr className='m-0 p-0' style={{ height: '5px', color: '#333' }} />
				<p>
					Your order has successful been placed. An email of your receipt has
					been sent to the email linked in your account.
				</p>
			</section>
			<section>
				<h2 className='h2 text-danger text-center'>
					Thank you for your patronage!
				</h2>
			</section>
			<section style={{ marginTop: '250px' }}>
				<h5 className='mt-5 h5 text-muted text-center w-75 mx-auto'>
					This page marks the end of the project. If you have any questions,
					comments or constructive criticism, please do not hesitate to contact
					me by email. Thank you for this opportunity!
				</h5>
			</section>
			<section>
				<h5 className='mt-2 h5 text-muted'>Sincerely,</h5>
				<h5 className='mt-2 h5 mb-0 text-muted'>
					Keeth Norman William Spindler
				</h5>
				<img src={signature.default} alt='' className='w-50 h-50 mt-5' />
			</section>
		</div>
	);
};

export default OrderComplete;
