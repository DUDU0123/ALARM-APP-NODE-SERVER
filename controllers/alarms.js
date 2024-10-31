const alarmModel = require('../models/alarm.js');
async function handleCreateAlarm(req, res) {
    try {
        if (!req.body) return res.status(400).json({ msg: 'Provide alarm data' });
        const { time, label, sound, snoozeEnabled, snoozeDuration, active } = req.body;
        const createdAlarm = await alarmModel.alarmModel.create({
            time: time,
            label: label,
            sound: sound,
            snoozeEnabled: snoozeEnabled,
            snoozeDuration: snoozeDuration,
            active: active,
        });
        if (!createdAlarm) return res.status(400).json({ msg: 'Failed to create alarm' });
        return res.status(201).json({ msg: "Success", data: createdAlarm }); // Respond with JSON object
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
// Function to get all alarms
async function handleGetAlarms(req, res) {
    try {
        const allAlarms = await alarmModel.alarmModel.find({});
        return res.status(200).json({ allAlarms });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

async function handleEditAlarm(req, res) {
    try {

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
async function handleDeletAlarm(req, res) {
    try {

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}
async function handleGetOneAlarm(req, res) {
    try {

    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    handleCreateAlarm: handleCreateAlarm,
    handleGetAlarms: handleGetAlarms,
    handleGetOneAlarm: handleGetOneAlarm,
    handleEditAlarm: handleEditAlarm,
    handleDeletAlarm: handleDeletAlarm,
}
