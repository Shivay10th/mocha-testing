// import * as mongoose from 'mongoose';
const mongoose = require('mongoose')
const Student = require('../app/student')
before((done)=>{
    mongoose.connect('mongodb://localhost/mongotube',{useNewUrlParser:true, useUnifiedTopology: true },);
    mongoose.connection.once('open',()=>{
        console.log('Connected');
        done();
    })
    .on('erorr',(e)=>{
        console.log("your Error : ", e  );
    })
})

beforeEach((done)=>{
    // mongoose.connection.collections.students.drop(()=>{
    //     console.log("done");
    //     done()
    // });
    Student.collection.drop().then(()=>{
        console.log("colloection dropped before operation ");
        done()
    })
    // db.dropCollection("Student");

    
})