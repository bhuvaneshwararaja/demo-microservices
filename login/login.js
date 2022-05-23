const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json())

app.use(cors());
const PORT = 8083

app.post('/login',(req,res) => {
    if(req.body.username == "test" && req.body.password == "12345") res.json({status:true})
    else res.json({status:false,error:"user name or password is incorrect"})
})


app.listen(PORT,() => {
    console.log(`server listen at port ${PORT}`)
})