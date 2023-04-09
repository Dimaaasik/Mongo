const express = require('express');
const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')


const Company = require('./company')

const PORT = 3000;
const URL = 'mongodb://localhost:27017';


const app = express();
app.use(express.json());


mongoose
    .connect(URL)
    .then(() => console.log('Connected To DB?!'))
    .catch((err) => console.log(`DB connection error ${err}`))

app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Server works on port ${PORT}`);
        });

const handleError = (res, error) => {
    res.status(500).json({error});
    console.log(error)
}

let db;

app.post('/companies', (req, res) => {
    const company = new Company(req.body);

    company
        .save()
        .then((result) =>{
            res
                .status(201)
                .json(result);
        })
        .catch(() => { handleError (res, `Something went wrong ${res}`)})
})


