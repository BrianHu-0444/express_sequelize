'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Physician extends Model {

    static associate(models) {
      Physician.belongsToMany(models.patient, { through: "Appointment", foreignKey: "physicianId" });
    }
  }
  Physician.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Physician',
  });
  return Physician;
};