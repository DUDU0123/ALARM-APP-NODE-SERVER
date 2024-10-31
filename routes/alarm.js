const express = require('express');
const { handleGetAlarms, handleGetOneAlarm, handleCreateAlarm, handleEditAlarm, handleDeletAlarm } = require('../controllers/alarms');
const router = express.Router();

router.post('/add', handleCreateAlarm);
router.patch('/:id', handleEditAlarm);
router.get('/', handleGetAlarms);
router.get('/:id', handleGetOneAlarm);
router.delete('/:id', handleDeletAlarm);


module.exports = router;