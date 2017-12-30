const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Orders were fetched'
	});
});

router.post('/', (req, res) => {
	const order = {
		productID: req.body.productID,
		quantity: req.body.quantity
	};
	res.status(201).json({
		message: 'Order was created',
		order
	});
});

router.get('/:orderID', (req, res) => {
	res.status(200).json({
		message: 'Order details',
		orderID: req.params.orderID
	});
});

router.delete('/:orderID', (req, res) => {
	res.status(200).json({
		message: 'Order deleted',
		orderID: req.params.orderID
	});
});

module.exports = router;