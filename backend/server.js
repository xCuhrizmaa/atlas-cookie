
const express = require('express')
const app = express()

app.get('/', (req,res)=>{
  res.send('Atlas backend running')
})

app.listen(3001)
