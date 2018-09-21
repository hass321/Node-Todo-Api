const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, db) => {
    if(err){
        return console.log('Unable to connect MongoDB server', err);
    };
    console.log('Connected to Mongodb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5ba3d1ea99319508c4dcb9ec")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => console.log(res))

    db.collection('Users').findOneAndUpdate({
        name: 'Hassan'
    },{
        $set: {
            age: 25
        }
    },{
        returnOriginal: false
    }).then(res => console.log(res));
})