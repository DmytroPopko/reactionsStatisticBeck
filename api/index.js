const express = require('express');
const router = express.Router();
const ctrlStream = require('../controller');

router.get('/streams', ctrlStream.get);

router.get('/streams/:id', ctrlStream.getById);

router.post('/streams', ctrlStream.create);

router.put('/streams/:id', ctrlStream.update);

router.delete('/streams/:id', ctrlStream.remove);

module.exports = router;