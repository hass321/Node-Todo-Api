const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        return console.log("Unable to connect to Mongodb Server");
    }

    console.log("Connected to MongoDB Server");

    // db.collection('Users').find({ _id: new ObjectID('5ba3d1ea99319508c4dcb9ed')}).toArray()
    //     .then((docs) => {
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }, (err) => {
    //         console.log('Unable to fetch Data', err);
    //     });

    // db.collection('Users').find().count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     }, (err) => {
    //         console.log('Unable to fetch Data', err);
    //     });

    db.collection('Users').find({ name: 'Waqas' }).toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch Data', err);
        });

        
    db.close();
});