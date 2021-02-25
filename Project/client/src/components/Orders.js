import React from 'react';
import FileManager from './FileManager';
const Orders = () => {
	return (
		<div className='container mt-2'>
			<section>
				<h2 className='h2 text-danger m-0 p-0'>Purchase Order</h2>
				<hr className='m-0 p-0' style={{ height: '5px', color: '#333' }} />
				<p className='fw-bold'>
					Please upload a purchase order before continuing.
				</p>
			</section>
			<section className='mb-3'>
				<FileManager />
			</section>
		</div>
	);
};

export default Orders;
