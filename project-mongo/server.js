const express = require('express');
//const { connectToDb, getDb } = require('./db.js');
const mongoose = require('mongoose')
const Company = require('./company')

const PORT = 3000;
const URL = 'mongodb://localhost:27017';
//const dbName = 'Search';

const app = express();
app.use(express.json());


mongoose
    .connect(URL)
    .then(() => console.log('Connected To DB'))
    .catch((err) => console.log(`DB connection error ${err}`))

const handleError = (res, error) => {
    res.status(500).json({error});
}

let db;
connectToDb((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Server works on port ${PORT}`);
        });
        db = getDb();
    } else {
        console.log(`Connection error ${err}`);
    }
});
app.post('/companies', (req, res) => {
    const company = new Company(req.body);
    company
        .save()
        .then((result) =>{
            res
                .status(201)
                .json(result);
        })
        .catch(() => { handleError (res, "Something went wrong")})
})


/*
app.post('/companies', (req, res) =>{
    console.log('POST')
    db
        .collection('companies')
        .insertOne(req.body)
        .then((result) => {
            res
                .status(201)
                .json(result);
        })
        .catch(() => { handleError (res, "Something went wrong")})

});
*/

