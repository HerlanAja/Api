const Item = require('../models/item');

// Get all items
exports.getItems = (req, res) => {
  Item.getAll((err, items) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(items);
  });
};

// Create new item
exports.createItem = (req, res) => {
  const newItem = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  Item.create(newItem, (err, result) => {
    if (err) return res.status(400).json({ message: err.message });
    res.status(201).json({ id: result.insertId, ...newItem });
  });
};

// Update item
exports.updateItem = (req, res) => {
  const id = req.params.id;
  const updatedItem = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
  };

  Item.update(id, updatedItem, (err, result) => {
    if (err) return res.status(400).json({ message: err.message });
    res.json({ id, ...updatedItem });
  });
};

// Delete item
exports.deleteItem = (req, res) => {
  const id = req.params.id;

  Item.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Item deleted' });
  });
};
