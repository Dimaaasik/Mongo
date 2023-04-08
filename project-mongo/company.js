const mongoose = require('mongoose');

const Schema = mongoose.Schema

const companySchema = new Schema({
    founder:{
        type: String,
        required: true,
    },
    workers:{
        type: Number,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    }
    }
)

const Companies = mongoose.model('companies', companySchema)

module.exports = Companies