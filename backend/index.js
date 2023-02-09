const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const app = express();

mongoose.connect(process.env.MONGO_URL, () => console.log("DB in connected"))

app.listen(process.env.PORT, () => {
    console.log("Server is running on port");
});