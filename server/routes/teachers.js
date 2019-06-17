const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teachers');

router.post('/teacherlogin', teacherController.login);

module.exports = router;