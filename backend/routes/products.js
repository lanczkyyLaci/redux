import express from 'express';
import getProducts from '../models/products.js';
const router = express.Router();

router.get('/', (req, res) => {
	getProducts((err, products) => {
		if (err) {
			throw err;
			//res.send('err')
		}
		res.json(products);
	});
});

export default router;
