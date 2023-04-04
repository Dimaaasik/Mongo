const express = require('express');
const { connectToDb, getDb } = require('./db.js');
const PORT = 3000;

const app = express();

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


