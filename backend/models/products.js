import mongoose from 'mongoose';

let productsSchema = mongoose.Schema({
	_id: { type: Number },
	name: { type: String },
	category: { type: String, required: true },
	description: { type: String, required: true },
	picture: { type: String, required: true },
	price: { type: Number, required: true },
	stock: { type: Number, required: true }
});

const Products = mongoose.model('Products', productsSchema);

const getProducts = (callback, limit) => Products.find(callback).limit(limit);

export default getProducts;
