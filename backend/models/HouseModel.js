const { DataTypes } = require("sequelize");
const sequelize = require('../config/db');
const Sequelize = require("sequelize");

const House = sequelize.define("house", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currentValue: {
      type: DataTypes.FLOAT,
    },
    loanAmount: {
      type: DataTypes.FLOAT,
    },
    risk: {
      type: DataTypes.FLOAT,
    },
 },
 //additional properites, can add auto timestamps to false
  { tableName: 'houses' }
 )

 module.exports = House;