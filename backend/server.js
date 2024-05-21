const express = require('express');
const dotenv = require('dotenv');
const chats = require("./data/data.js");
const connectDB = require('./config/db.js');
const colors = require('colors');


dotenv.config();


if (!process.env.MONGO_URI) {
    console.error('Error: MONGO_URI is not defined in environment variables.'.red.bold);
    process.exit(1);
}

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("hey! got tested successfully");
});

app.get("/api/chat", (req, res) => {
    res.send(chats);
    console.log("test");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
