import express from 'express';
import Event from '../models/event'; // Assumiamo che tu abbia creato un modello Mongoose chiamato "Event"
const router = express.Router();

// GET /events - Ottieni tutti gli eventi
router.get('/', async (req, res) => {
	try {
		const events = await Event.find();
		res.json(events);
	} catch (error) {
		res.status(500).json({ error: 'Errore nel recuperare gli eventi' });
	}
});

// GET /events/:id - Ottieni un evento specifico
router.get('/:id', async (req, res) => {
	try {
		const event = await Event.findById(req.params.id);
		if (!event) {
			res.status(404).json({ error: 'Evento non trovato' });
		} else {
			res.json(event);
		}
	} catch (error) {
		res.status(500).json({ error: "Errore nel recuperare l'evento" });
	}
});

// POST /events - Crea un nuovo evento
router.post('/', async (req, res) => {
	try {
		const newEvent = await Event.create(req.body);
		res.status(201).json(newEvent);
	} catch (error) {
		res.status(500).json({ error: "Errore nella creazione dell'evento" });
	}
});

// PUT /events/:id - Modifica un evento esistente
router.put('/:id', async (req, res) => {
	try {
		const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!event) {
			res.status(404).json({ error: 'Evento non trovato' });
		} else {
			res.json(event);
		}
	} catch (error) {
		res.status(500).json({ error: "Errore nella modifica dell'evento" });
	}
});

// DELETE /events/:id - Elimina un evento
router.delete('/:id', async (req, res) => {
	try {
		const event = await Event.findByIdAndDelete(req.params.id);
		if (!event) {
			res.status(404).json({ error: 'Evento non trovato' });
		} else {
			res.json({ message: 'Evento eliminato con successo' });
		}
	} catch (error) {
		res.status(500).json({ error: "Errore nell'eliminazione dell'evento" });
	}
});

export default router;
