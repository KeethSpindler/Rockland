import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FileManager = () => {
	const [file, setFile] = useState('');
	const [uploadedFile, setUploadedFile] = useState({});
	const [message, setMessage] = useState({});

	const onChange = (e) => {
		const { files } = e.target;
		setFile(files[0]);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		const formData = new FormData();
		formData.append('file', file);

		try {
			const res = await axios.post(
				'http://localhost:5000/api/orders/v1',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			);

			const { fileName, filePath } = res.data;
			console.log(filePath);
			setUploadedFile({ fileName, filePath });
			setMessage({
				class:
					'bg-success mx-auto w-25 text-center mb-2 p-2 text-light rounded',
				msg: 'Upload Successful!'
			});
		} catch (err) {
			if (err.response.status === 500) {
				console.log(err.response.data.payload.msg);
			} else {
				setMessage({
					class:
						'bg-danger mx-auto w-50 text-center mb-2 p-2 text-light rounded',
					msg: err.response.data.payload.msg
				});
			}
		}
	};
	return (
		<Fragment>
			{message.msg ? <div className={message.class}>{message.msg}</div> : null}
			<div className='card w-75 mx-auto'>
				<div className='card-body'>
					<div className='card-title'>
						<div className='text-center'>
							{uploadedFile.fileName ? (
								<Fragment>
									<h4 className='h4'>{uploadedFile.fileName}</h4>
									<iframe
										src={uploadedFile.filePath}
										className='w-100'
										type='application/pdf'
										title='pdfFrame'
										style={{ height: '550px' }}
									/>
								</Fragment>
							) : (
								<h4 className='h4'>Awaiting Purchase Order...</h4>
							)}
						</div>
					</div>
					<div className='card-text'>
						<form onSubmit={onSubmit}>
							<div className='input-group'>
								<input
									type='file'
									className='form-control'
									id='inputGroupFile'
									aria-describedby='inputGroupFileAddon'
									aria-label='Upload'
									accept='.pdf'
									onChange={onChange}
								/>
								<input
									className='btn btn-primary'
									type='submit'
									id='btnSubmit'
									value='Upload'
								/>
							</div>
						</form>
					</div>
					<div className='card-footer mt-3'>
						{uploadedFile.fileName ? (
							<Link className='btn btn-success' to='/orders/order-complete'>
								Submit Order
							</Link>
						) : (
							<div className='btn btn-success disabled'>Submit Order</div>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default FileManager;
