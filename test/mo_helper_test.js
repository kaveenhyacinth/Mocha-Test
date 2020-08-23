const mongoose = require('mongoose');
const Promise = global.Promise;

// test the connection before all
before(done => {
    mongoose.connect("mongodb://localhost/mongotube", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection
        .once('open', () => {
            console.log('Connected')
            done(); // Done and moving to the next test case
        })
        .on('error', (error) => {
            console.log("Error: ", error);
        });
});


// clear the DB to eleminate redundancy
beforeEach(done => {
    mongoose.connection.collections.students.drop(() => {
        console.log("collection has dropped");
        done();
    });
});


