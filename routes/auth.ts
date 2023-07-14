import express from 'express';
const router = express.Router();

// Rotte per l'autenticazione
// POST /auth/register - Registrazione di un nuovo utente
router.post('/register', (req, res) => {
	// Implementa la logica di registrazione dell'utente qui
});

// POST /auth/login - Login dell'utente
router.post('/login', (req, res) => {
	// Implementa la logica di login dell'utente qui
});

module.exports = router;
