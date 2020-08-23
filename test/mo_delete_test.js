const Student = require('../app/student');
const assert = require('assert');

// Delete tests
describe("Delete Tests", () => {
    let deleter;

    beforeEach(done => {
        deleter = new Student({name: "Deleter"});
        deleter.save()
            .then(() => done())
            .catch(error => "error in deleter beforeeach");
    });

    it("Delete a user: Deleter", done => {
        Student.findByIdAndDelete(deleter._id)
            .then(() => Student.findOne({name: "Deleter"}))
            .then((student) => {
                assert(student === null);
                done();
            })
            .catch(error => "error in deleter it");
    });
});

