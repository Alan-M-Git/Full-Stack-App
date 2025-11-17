//Connect to postgres using node-postgres package

const POOL = require('pg').Pool

const pool = new POOL({
    user: 'me',
    host: 'localhost',
    database: 'favlinks',
    password: 'password',
    port: 5432


})

//CREATE all the functions that will be the request handless in the express server
//GET ALL LINKS FROM DATABASE

//CREATE

//READ
const getLinks = (req, res) => {
    pool.query('SELECT * FROM links ORDER BY id ASC', (error, result) =>{
        if(error){
            throw error
        }
        res.status(200).json(result.rows)
    })
}


//UPDATE

//DELETE


module.exports = {
    getLinks
}