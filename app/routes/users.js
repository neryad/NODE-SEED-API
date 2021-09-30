const express = require('express');
const router = express.Router();
const { getItems, getItem, createItem, putItem, deleteItem } = require('../controllers/users');
const checkOrigin = require('../middleware/origin');
router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', checkOrigin, createItem);
router.put('/:id', putItem);
router.delete('/:id', deleteItem);

module.exports = router;
