require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',(req, res)=>{
    res.send("hello from chai")
})

app.get('/login',(req,res)=>{
    res.send('<h1> please Login at this website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h1>Coffee is Love</h1>')
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${process.env.PORT}`)
})