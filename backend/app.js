import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { mongoose } from 'mongoose';
import productRotes from './routes/products.js';

dotenv.config();

const app = express();
const PORT = 5000;

// mongodb://localhost:27017/node-express-rest-api
// mongoose.connect('mongodb://localhost:27017/node-express-rest-api', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// });
// mongoose.connect;

// // mongodb://localhost:27017/node-express-rest-api
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connect;

app.use(bodyParser.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

// http://localhost:5000/products
app.use('/products', productRotes);

// http://localhost:5000
app.get('/', (req, res) => {
	res.send('Laci !');
});

app.listen(PORT, () => {
	try {
		console.log(`REST API server is running at http://localhost:${PORT}`);
	} catch {
		console.log('REST API server is FAIL running');
	}
});
