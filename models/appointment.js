'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
  
    static associate(models) {
      this.belongsTo(models.Physician);
      this.belongsTo(models.patient);
    }
  }
  Appointment.init({
    physicianId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};