const mongoose = require('mongoose');

const alarmSchema = mongoose.Schema(
    {
        time: {
            type: Date,
            required: true,
        },
        label: {
            type: String,
            default: 'Alarm',
        },
        sound: {
            type: String,
            default: 'default',
        },
        snoozeEnabled: {
            type: Boolean,
            default: false,
        },
        snoozeDuration: {
            type: Number,
            default: 5,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

const alarmModel = mongoose.model('Alarm', alarmSchema);
module.exports = {
    alarmModel: alarmModel,
}
