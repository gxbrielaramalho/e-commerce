const express = require('express');
const router = express.Router();
const Item = require('./item');

// Rota para criar um item
router.post('/items', async (req, res) => {
  const { name, price } = req.body;
  try {
    const newItem = new Item({ name, price });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rota para obter todos os itens
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
