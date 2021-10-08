'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
  shirtColor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pantColor: {
    type: DataTypes.STRING,
  }
})

module.exports = Clothes;
