const express = require('express');
const { connectToDb, getDb } = require('./db.js');
const PORT = 3000;
const Company = require('./company')

const app = express();
app.use(express.json());

connectToDb((err) => {
    if (!err) {
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Server works on port ${PORT}`);
        });
        const db = getDb();
        db.listCollections().toArray((err, collections) => {
            if (err) {
                console.log('Error getting collections:', err);
            }
        });

    } else {
        console.log(`Connection error ${err}`);
    }
});

app.post('/company', (req, res) => {
    const company = new Company(req.body);
    company
        .save()
        .then((result) =>{
            res
                .status(201)
                .json(result);
        })
        .catch((err) => console.log(res, err, 'Something went wrong'))
})


