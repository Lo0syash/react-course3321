const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products',
})

app.get('/', (req, res) => {
    return res.json('Hi')
})


app.post('/dateProduct', (req, res) => {
    const sqlDate = 'SELECT * FROM items'
    db.query(sqlDate, (err, result) => {
        if (err) {
            console.error('Error during check product: ' + err)
            res.status(500).json({message: 'Error database'})
        } else {
            if (result.length > 0) {
                res.status(200).json({message: result})
            }
        }
    })
})

app.listen(5051, () => {
    console.log("listening")
})