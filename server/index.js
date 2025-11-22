const express = require('express')

const app = express()

const path = require('path')

const db = require('./queries')

const PORT = 9001

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../client/dist')))


//STARTING ROUTES

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))

})

// app.get('/test', (req, res) => {
    
//  })

//CRUD
//CREATE
app.post('/new', db.createLink)
//READ
app.get('/links', db.getLinks)
//UPDATE
app.put('/links/:id', db.updateLink)
//DELETE
app.delete('/links/:id', db.deleteLink)




//STARTING EXPRESS ON OUR PORT
app.listen(PORT, ()=>{
    console.log(`The app is running on port ${PORT}.`)
})

