import express from "express"
import cors from "cors"

const PORT = 6767

const app = express()

app.get("/", (req, res) => {
    res.json({ msg: "server is wok" })
})


app.listen(PORT, () => {
    console.log("server er startet");
    
})