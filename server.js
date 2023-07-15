// per le variabili di sistema
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const dbConnection = require('./database/connection');
dotenv.config();

const db = 'mongodb://localhost:27017/myDatabase';

const app = express();
app.use(cors());
app.use(express.json());

// Connection function
const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('MongoDB successfully connected');
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

app.use('/api/v1/user', require('./routes/user.router.js'));

connectDB();
// dbConnection();

const PORT = process.env.PORT;

app.listen(PORT, () => {});
console.log(`Server is listening on port ${PORT}`);
