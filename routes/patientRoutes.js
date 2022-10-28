const Physician = require("../models").Physician;
const Patient = require("../models").Patient;

module.exports = function(router) {
  router.get("/patients", (req, res) => {
    Patient.findAll({
      include: [Physician]
    })
      .then(patients => {
        res.json(patients);
      })
      .catch(err => res.json(err));
  });

  router.get("/patients/:id", (req, res) => {
    Patient.findAll({
      where: { id: req.params.id }
    })
      .then(patient => {
        res.json(patient[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/patients", (req, res) => {
    Patient.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/patients/:id", (req, res) => {
    Patient.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedPatient => {
        res.json(updatedPatient);
      })
      .catch(err => res.json(err));
  });

  router.delete("/patients/:id", (req, res) => {
    Patient.destroy({
      where: { id: req.params.id }
    })
      .then(patient => {
        res.json(patient);
      })
      .catch(err => res.json(err));
  });
};