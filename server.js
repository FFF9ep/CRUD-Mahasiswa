const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const User = require("./models/userModels")

const app = express()
app.use(bodyParser.json())


mongoose.connect("mongodb://127.0.0.1:5000/belajar")
const db = mongoose.connection

db.on("error", console.error.bind(console, "Error : "))
db.once("open", () => {
    console.log("Connected to Database")
})

app.get("/", (req, res) => {
    try {
        res.send("Endpoint / Berhasil berjalan")
    } catch (err) {
        req.status(500).send("Error On This Endpoint")
        console.log(err)
    }
})

app.post("/tambahuser", async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send("Data Successfully Save")
    } catch (err) {
        res.status(500).send("Data was error to be saved")
        console.log(err)
    }
})

app.get("/users", async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send("Error while getting users")
        console.log(err)
    }
})

app.delete("/users:id", async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id)
        if (!users) {
            res.status(404).send("Data not found")
        }
        res.status(200).send("Data Was Successful Delete")
    } catch (err) {
        res.status(500).send("Error while getting data")
        console.log(err)
    }
})

app.put("/users:id", async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if (!users) {
            res.status(404).send("Data not found")
        }
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send("Error while getting data")
        console.log(err)
    }
})

app.get("/users:id", async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        if (!users) {
            res.status(404).send("Data not found")
        }
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send("Error while getting data")
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})