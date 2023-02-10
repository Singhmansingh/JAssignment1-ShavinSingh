const { MongoClient } = require('mongodb');
const dbUrl = "mongodb+srv://dbUser:test@cluster1.ip3otmj.mongodb.net/test";
const client = new MongoClient(dbUrl);

// Connect to Mongo DB and return testdb database

async function connection(){
    try {
        await client.connect();
        var db = client.db("escapeRoom");
        return db;
    } catch (e) { console.log(e); }
}

// Select all documents from menuLinks
async function getRooms() {
    var db = await connection();
    var results = db.collection('rooms').find({});
    var res = await results.toArray(); // converts to an array, is a promise
    return res;
}

module.exports = {
    connection,
    getRooms,
}