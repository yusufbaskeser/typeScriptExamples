import express from "express"
import mongoose from "mongoose"
import User from "./schema"

const app = express()
app.use(express.json())

app.get("/users", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası" })
  }
})

app.post("/users", async (req, res) => {
  try {
    const { username, password, token, age, isAdmin } = req.body
    const newUser = new User({ username, password, token, age, isAdmin })
    await newUser.save()
    res.status(201).json(newUser)
  } catch (error) {
    res.status(500).json({ error: "Sunucu hatası" })
  }
})



mongoose.connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("MongoDB bağlandı")
    app.listen(3000, () => {
      console.log("Sunucu 3000 portunda çalışıyor")
    })
  })
  .catch(err => {
    console.error("MongoDB bağlantı hatası:", err)
  })

