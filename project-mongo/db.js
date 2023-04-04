const { MongoClient } = require('mongodb');

const URL = 'mongodb://localhost:27017';
const dbName = 'Search';

let dbConnection;
module.exports = {
    connectToDb: (cb) => {
        MongoClient
            .connect(URL)
            .then((client) => {
                console.log('Connected to MongoDB');
                dbConnection = client.db(dbName);
                return cb();
            })
            .catch((err) => {
                return cb(err);
            });
        const client = new MongoClient(URL, { useUnifiedTopology: true }); // { useUnifiedTopology: true } removes connection warnings;

        client
            .connect()
            .then(
                client =>
                    client
                        .db(dbName)
                        .listCollections()
                        .toArray() // Returns a promise that will resolve to the list of the collections
            )
            .then(cols => console.log("Collections", cols))
    },
    getDb: () => dbConnection,
};
