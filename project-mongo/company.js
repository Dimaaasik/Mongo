const mongose = require('mongoose');

const Schema = mongose.Schema

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

const Company = mongose.model('companies', companySchema)

module.exports = Company