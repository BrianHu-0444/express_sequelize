'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {
  
    static associate(models) {
      this.belongsToMany(models.Physician,{through:"Appointment",foreignKey:"patientId"})
    }
  }
  patient.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patient',
  });
  return patient;
};