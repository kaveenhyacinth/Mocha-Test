const Student = require('../app/student');
const assert = require('assert');

// Update tests
describe("Update Tests", () => {
    let updater;

    beforeEach(done => {
        updater = new Student({name: "Updater"});
        updater.save()
            .then(() => done());
    });

    it("Set and save test", () => {
        updater.set('name', "upUpdater");
        updater.save()
            .then(() => Student.find({}))
            .then(students => {
                assert(students[0].name !== "Updater");
            })
    });
});

