'use strict';

require('dotenv').config();

const DATABASE_URL =
  process.env.NODE_ENV === "test" ? "sqlite: memory" : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require("sequelize");

// import schema's and collections

const food = require('./food.js');
const clothes = require("./clothes.js");
const Collection = require('./collection-class.js');


let sequelizeOptions =
process.env.NODE_ENV === "production"
  ? {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  : {};

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const foodModel = food(sequelize, DataTypes)
const clothesCollection = clothes(sequelize, DataTypes)

// turn models into collections

const foodCollection = new Collection(foodModel)

module.exports = {
  db: sequelize,
  Clothes: clothesCollection,
  Food: foodCollection
};
