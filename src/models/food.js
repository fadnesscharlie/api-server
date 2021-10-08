'use strict';

const cake = (sequelize, DataTypes) => sequelize.define('Cakes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filling: {
    type: DataTypes.BOOLEAN
  },
  frosting: {
    type: DataTypes.STRING
  }
})

module.exports = cake;
