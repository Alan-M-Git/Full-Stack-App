//Connect to postgres using node-postgres package

require('dotenv').config()
const POOL = require('pg').Pool

const pool = new POOL({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

//CREATE all the functions that will be the request handless in the express server
//GET ALL LINKS FROM DATABASE

//CREATE
const createLink = (req, res) => {
    //take data user passes and insert into table
    const name = req.body.name
    const URL = req.body.URL

    pool.query('INSERT INTO links (name, URL) VALUES ($1, $2)', 
        [name, URL], 
        (error, result) =>{
        if(error){
            throw error
        }
        // res.status(201).send(`Link added with ID: ${result.rows[0].id}`)
        res.status(201).send(`Link added with ID: ${result.insertId}`)

       },
    )
}



//READ
const getLinks = (req, res) => {
    //get back the data currently in the database
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
}


//UPDATE
const updateLink = (req, res) => {
    const id = parseInt(req.params.id)
    const name = req.body.name
    const URL = req.body.URL

    pool.query(
        'UPDATE links SET name = $1, URL = $2 WHERE id = $3',
        [name, URL, id],
        (error, result) => {
            if(error){
                throw error
            }
            res.status(200).send(`Link modified with ID: ${id}`)
        }
    )
}

//DELETE
const deleteLink = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('DELETE FROM links WHERE id = $1', [id], (error, result) => {
        if(error){
            throw error
        }
        res.status(200).send(`Link deleted with ID: ${id}`)
    })
}


module.exports = {
    getLinks,
    createLink,
    updateLink,
    deleteLink
}