const uri = "mongodb+srv://LMS_customer:customer@cluster0.mw6j0.mongodb.net/LMS?retryWrites=true&w=majority";
const {MongoClient} = require('mongodb');

const client = new MongoClient(uri);


// The database to use
const dbName = "LMS";
         
async function dbConnect() {
   try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        // Use the collection "people"
        const col = db.collection("screenReservations");

        // Construct a document                                                                                                                                                              
        let personDocument = {
            "name": { "first": "Alan", "last": "Turing" },
            "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
            "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
            "contribs": [ "Turing machine", "Turing test", "Turingery" ],
            "views": 1250000
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);

       } catch (err) {
        console.log(err.stack);
    }

    finally {
       await client.close();
   }
}


dbConnect().catch(console.dir);

module.exports = { dbConnect };