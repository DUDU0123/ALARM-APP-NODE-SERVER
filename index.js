require('dotenv').config();
const express = require('express');
const router = require('./routes/alarm.js');
const db = require('./connection.js');
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(router, '/');
db.connectDB(process.env.MONGO_URL)
    .then(() => console.log('DB connected'))
    .catch((err) => console.log('DB connection failed', err));
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));