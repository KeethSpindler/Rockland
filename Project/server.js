// Importing Dependencies
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const cors = require('cors');

//Set dotenv Path
dotenv.config({ path: './config/config.env' });

//Route Imports
const orders = require('./routes/api/orders');

const app = express();

//Instantiate Logger
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// Middleware Mounting
app.use(express.json({ extended: false }));
app.use(fileUpload());
app.use(cors());
app.use('/api/orders/v1', orders);

const PORT = process.env.PORT || 4000;

const server = app.listen(
	PORT,
	console.log(
		`Server listening on port ${PORT} in ${process.env.NODE_ENV} environment`
	)
);
