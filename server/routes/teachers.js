const express = require('express');
const router = express.Router();
const pupilController = require('../controllers/login');

router.get('/', pupilController.getAll);
router.post('/', pupilController.create);
router.get('/:pupilId', pupilController.getById);
router.put('/:pupilId', pupilController.updateById);
router.delete('/:pupilId', pupilController.deleteById);

module.exports = router;