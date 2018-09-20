// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID();
console.log(id);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // const Users = [{ name: 'Waqas', age: 26, location: 'Lahore' }, {name: 'Usama', age: 26, location: 'Rawalpindi'}];

    // db.collection('Users').insert(Users, (err, result) => {
    //     if(err) return console.log('Unable to insert todo', err);
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.close();
});