const express = require('express');
const router = express.Router();

router.get('/', ()=>{
    return res.json({
        alarm: "Hi I will list all alarms"
    });
})

module.exports = router;