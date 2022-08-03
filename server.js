const express = require('express');

const app = express()

app.get('/datos', (req,res) => {
    res.send(`Servidor conectado ${PORT} -PID ${process.pid}` )
})

const PORT = process.env.PORT || 8081

app.listen(PORT, ()=>{
    console.log(`Servidor conectado ${PORT}`)
})
