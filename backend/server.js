const express = require('express')

const app = express()

app.listen(5000,
    console.log("Server started on port 5000")
)

app.get("/", (req,res) => {
    res.send("hey! got tested successfully")
})