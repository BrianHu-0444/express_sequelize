const Appointment = require("../models").Appointment;
const Physician = require("../models").Physician;
const Patient = require("../models").Patient;

module.exports = function(router) {
  router.get("/appointments", (req, res) => {
    Appointment.findAll({
      include: [Physician, Patient]
    }).then(appointments => {
      res.json(appointments);
    });
  });

  router.get("/appointments/:id", (req, res) => {
    Appointment.findAll({
      where: { id: req.params.id },
      include: [Physician, Patient]
    }).then(appointment => {
      res.json(appointment[0]);
    });
  });

  router.post("/appointments", (req, res) => {
    Appointment.create({
      physicianId: req.body.physicianId,
      patientId: req.body.patientId
    })
      .then(appointments => {
        res.json(appointments);
      })
      .catch(err => res.json(err));
  });

  router.put("/appointments/:id", (req, res) => {
    Appointment.update(
      { physicianId: req.body.physicianId, patientId: req.body.patientId },
      { where: { id: req.params.id } }
    )
      .then(updatedAppointment => {
        res.json(updatedAppointment);
      })
      .catch(err => console.log(err));
  });

  router.delete("/appointments/:id", (req, res) => {
    Appointment.destroy({
      where: { id: req.params.id }
    }).then(appointment => {
      res.json(appointment);
    });
  });
};