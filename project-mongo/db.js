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
        const client = new MongoClient(URL, { useUnifiedTopology: true });
        client
            .connect()
            .then(
                client =>
                    client
                        .db(dbName)
                        .listCollections()
                        .toArray()
            )
            .then(cols => console.log("Collections", cols))

        client
            .connect()
            .then(client =>
                client
                    .db()
                    .admin()
                    .listDatabases()
            )
            .then(dbs => {
                console.log("Mongo databases", dbs);
            })

            .finally(() => client.close());
    },
    getDb: () => dbConnection,
};
