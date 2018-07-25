const Paciente = require('../models/paciente');

const pacienteCtrl = {};

pacienteCtrl.getPacientes = async (req, res, next) => {
    const pacientes = await Paciente.find();
    res.json(pacientes);
};

pacienteCtrl.createPaciente = async (req, res, next) => {
    console.log("CREATE PACIENTE");
    const paciente = new Paciente({
        IdPaciente: req.body.IdPaciente,
        Nombre: req.body.Nombre,
        Apellido1: req.body.Apellido1,
        Apellido2: req.body.Apellido2,
        IdSiglaDireccion: req.body.IdSiglaDireccion,
        Direccion: req.body.Direccion

    });
    // console.log(req);
    // console.log(res);
    // console.log(next);
    await paciente.save();
    res.json({status: 'paciente created'});
};

pacienteCtrl.getPaciente = async (req, res, next) => {
    const { id } = req.params;
    const paciente = await Paciente.findById(id);
    res.json(paciente);
};

pacienteCtrl.editPaciente = async (req, res, next) => {
    const { id } = req.params;
    const paciente = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Paciente.findByIdAndUpdate(id, {$set: paciente}, {new: true});
    res.json({status: 'paciente Updated'});
};

pacienteCtrl.deletePaciente = async (req, res, next) => {
    await Paciente.findByIdAndRemove(req.params.id);
    res.json({status: 'paciente Deleted'});
};

module.exports = pacienteCtrl;
