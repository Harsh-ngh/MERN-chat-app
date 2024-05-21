const express = require('express')
const dotenv=require('dotenv')
const chats =require("./data/data.js")
const app = express()


dotenv.config();

const PORT = process.env.PORT || 5000;
app.get("/", (req,res) => {
    res.send("hey! got tested successfully")
})

app.get("/api/chat", (req,res) => {
    res.send(chats)
    console.log("test")
})
app.listen(PORT,
    console.log(`Server started on port ${PORT}`)
)