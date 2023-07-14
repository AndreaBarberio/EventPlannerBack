import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
	type: { type: String, required: true },
	eventKeeper: { type: String, required: true },
	email: { type: String, required: true },
	eventDate: { type: Date },
	guests: { type: String, required: true },
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
