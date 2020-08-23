const Student = require('../app/student');
const assert = require('assert');

// Create tests
describe("Create Tests", () => {
    it("Create a user in the DB", done => {
        // assert(true);
        const Kaveen = new Student({
            name: "Kaveen Hyacinth De Alwis"
        });
        Kaveen.save()
            .then(() => {
                assert(!Kaveen.isNew);
                done();
            })
            .catch(() => {
                console.log("error");
            });
    });
});

