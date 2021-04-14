const Student = require('../app/student');
const assert = require('assert');
describe('Create records',()=>{
    it('Create a user in DB',()=>{
        // assert(false);
        const shivam = new Student({
            name : "shivam"
        });
        shivam.save().then((result) => {
            assert(!shivam.isNew);
        }).catch((err) => {
            console.log(err)
        });
    })
});