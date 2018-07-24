const mongoose = require('mongoose');
const { Schema } = mongoose;

const pacienteSchema = new Schema({

    id: { type: Number, required: true},
    title: { type: String, required: true },
    state: { type: String, required: true },
    url: { type: String, required: true},
    created_at: { type: String, required: true},
    updated_at: { type: String, required: true}
});

module.exports = mongoose.model('Paciente', pacienteSchema);
