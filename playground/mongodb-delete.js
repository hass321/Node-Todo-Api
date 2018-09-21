const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlPaser: true }, (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB server", err)
    }

    console.log('Connected to MongoDB');

    // -------------- deleteMany() ------------------------
    // db.collection('Todos').deleteMany({ text: 'drink Tea' }).then((res) => {
    //     console.log(res);
    // });

    // -------------- deleteOne ------------------------
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((res) => console.log(res));

    // -------------- findOneAndDelete -----------------
    db.collection('Todos').findOneAndDelete({ _id: new ObjectID("5ba57365cd8e83cbc5d6819c") })
        .then((res) => console.log(JSON.stringify(res, undefined, 2)));
});