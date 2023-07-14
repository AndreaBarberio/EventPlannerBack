const mongoose = require('mongoose');

// URL di connessione a MongoDB (sostituisci con il tuo URL)
const mongoURI =
	'mongodb+srv://andreabarberio97:prova1@eventplannercluster.henx9iq.mongodb.net/';

// Configurazione della connessione a MongoDB
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

// Gestione degli eventi di connessione al database
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});
