const express = require('express');
const cors = require('cors');
const app = express()
const axios = require('axios').default;

app.use(express.json())

app.use(cors());
const PORT = 8082
const cart = []

app.post("/cart-list/add",(req,res) => {
    console.log({...req.body,quantity:1})
    cart.push({...req.body,quantity:1})
    res.send(true)
})


app.get("/cart-list",(req,res) => {
    res.json(cart)
})


app.listen(PORT,() => {
    console.log(`server listen at port ${PORT}`)
})