import express from "express"
import cors from "cors"
import fs from "fs"

const PORT = 6767

const app = express()

app.get("/", (req, res) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
        if (err) {
            return res.json({ error: "den kan ikke læse indholdet dawg" })
        }
        const superData = JSON.parse(data)
        res.send(superData)
    })
    
})


app.listen(PORT, () => {
    console.log("server er startet");
    
})