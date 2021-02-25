const fs = require('fs');

//@desc     POST .pdf file from form
//@route    /api/orders/v1/
//@auth     public
exports.postPDF = (req, res, next) => {
	try {
		if (req.files === null) {
			return res.status(400).jsom({
				success: false,
				payload: {
					msg: 'No file was uploaded!'
				}
			});
		}

		const file = req.files.file;
		const fileExtension = file.name.split('.')[1];
		if (fileExtension !== 'pdf') {
			return res.status(400).json({
				success: false,
				payload: {
					msg:
						"Invalid file type: Please select a valid file with a '.pdf' extension"
				}
			});
		}

		const path = `${__dirname}/../client/public/assets/orders/${file.name}`;
		//Moves file into the public assets directory.
		//Serves the file back if it already exists.
		if (!fs.existsSync(path)) {
			file.mv(
				`${__dirname}/../client/public/assets/orders/${file.name}`,
				(err) => {
					if (err) {
						console.log(err);
						return res.status(500).json({
							success: false,
							payload: {
								msg: `Server Error: ${err}`
							}
						});
					}
				}
			);
		}

		return res.status(201).json({
			fileName: file.name,
			filePath: `/assets/orders/${file.name}`
		});
	} catch (err) {
		console.log(err);
		const data = {
			success: false,
			payload: {
				msg: `Server Error: ${err.message}`
			}
		};
		return res.status(500).json(data);
	}
};
