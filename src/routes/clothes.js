'use strict';

const express = require('express');

const clothesCollection = require('../models/index.js').Clothes;

const router = express.Router();

// RESTful Route Declaration

router.get('/clothes', getClothes);
router.get('/clothes/:id', getIdClothes);
router.post('/clothes', createClothes);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

// RESTful Router Handlers

async function getClothes (req, res) {
  let allClothes = await clothesCollection.findAll();
  res.status(200).json(allClothes);
}

async function getIdClothes ( req, res) {
  const id = parseInt(req.params.id);
  let oneClothes = await clothesCollection.findOne({ where: { id: id}});
  res.status(200).json(oneClothes);
}

async function createClothes(req, res) {
  let clothesData = req.body;
  let clothes = await clothesCollection.create(clothesData);
  res.status(200).json(clothes);
}

async function updateClothes(req, res) {
  const id = parseInt(req.params.id);
  const clothesData = req.body; 
  let clothes = await clothesCollection.findOne({ where: { id: id}})
  let updatedClothes = await clothes.update(clothesData);
  res.status(200).json(updatedClothes)
}

async function deleteClothes(req, res) {
  let id = parseInt(req.params.id);
  let deletedClothes = await clothesCollection.destroy({ where: { id: id}})
  res.status(200).json(deletedClothes);
}

module.exports = router

