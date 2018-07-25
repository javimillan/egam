const mongoose = require('mongoose');
const { Schema } = mongoose;
var Paciente = mongoose.model('Paciente');

const pacienteAvisoSchema = new Schema({
    IdPaciente:{ type: Schema.ObjectId, ref: "Paciente" },
    IdPacienteAviso: { type: Number, required: true},  
    IdAviso: { type: Number, required: true },
    IdTipoAvisoPaciente: { type: Number, required: true}
});

module.exports = mongoose.model('PacienteAviso', pacienteAvisoSchema);
