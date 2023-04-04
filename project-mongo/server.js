const express = require('express');
const{connectToDb, getDb} = require('./db')
const PORT = 3000;

const app = express();

connectToDb((err) => {
    if(!err){
        app.listen(PORT, (err)=>{
            err ? console.log(err) : console.log(`server work on port ${PORT}`)
        })
        db.getDb()
    }
    else{
        console.log(`connection error ${err}`);
    }
});
