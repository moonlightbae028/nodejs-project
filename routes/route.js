const express = require('express');
const router = express.Router();
const AlvinController = require('../controller/AlvinController');

router.get('/', AlvinController.nom);
router.get('/services', AlvinController.services);
router.get('/about', AlvinController.about);
router.get('/contact', AlvinController.contact);
router.get('/portfolio', AlvinController.portfolio);

module.exports = router;
