const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Handling GET requests to /products'
	});
});

router.post('/', (req, res) => {
	const product = {
		name: req.body.name,
		price: req.body.price
	};
	res.status(201).json({
		message: 'Handling POST requests to /products',
		createdProduct: product
	});
});

router.patch('/:productID', (req, res) => {
	res.status(200).json({
		message: 'Updated produt!',
	});
});

router.delete('/:productID', (req, res) => {
	res.status(200).json({
		message: 'Deleted product!',
	});
});

router.get('/:productID', (req, res) => {
	const id = req.params.productID;
	if (id === 'special') {
		res.status(200).json({
			message: 'You discovered the special product',
			id
		});
	} else {
		res.status(200).json({
			message: 'You passed an ID'
		});
	}
});

module.exports = router;