'use strict';

const express = require('express');

const router = express.Router()

const foodCollection = require('../models/index.js').Food;

// REST Route Declaration

router.get('/food', getFood);
router.get('/food/:id', getIdFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getFood (req, res) {
  let food = await foodCollection.read();
  res.status(200).json(food)
}

async function getIdFood (req, res) {
  let id = req.params.id
  let food = await foodCollection.read(id)
  res.status(200).json(food)
}

async function createFood (req, res) {
  const obj = req.body;
  let food = await foodCollection.create(obj)
  res.status(200).json(food)
}

async function updateFood (req, res) {
  let id = req.params.id;
  const obj = req.body;
  let food = await foodCollection.update(id, obj)
  res.status(200).json(food)
}

async function deleteFood (req, res) {
  let id = req.params.id;
  let food = await foodCollection.delete(id)
  res.status(200).json(food)
}

module.exports = router;
