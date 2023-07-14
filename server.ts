let express = require('express');
let app = express();
let port = 3000; // Puoi cambiare la porta a tua scelta

// Configura il server per gestire richieste JSON
app.use(express.json());

// Importa i file di routing
const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');

// Configura le rotte
app.use('/auth', authRoutes);
app.use('/events', eventRoutes);

// Avvia il server
app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
