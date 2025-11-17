const express = require('express')

const app = express()

const path = require('path')

const db = require('./queries')

const PORT = 9001

//MIDDLEWARE

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/dist')))


//STARTING ROUTES

app.get('/', (req, res) => {
//work here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))

})

app.get('/test', (req, res) => {
    //work here? see if the tutorial mentions it it might be a placeholder. If so delete this method.
    
 })

//CRUD
//CREATE
//READ
app.get('/links', db.getLinks)
//UPDATE
//DELETE






//STARTING EXPRESS ON OUR PORT
app.listen(PORT, ()=>{
    console.log(`The app is running on port ${PORT}.`)
})

