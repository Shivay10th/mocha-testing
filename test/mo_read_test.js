const Student = require("../app/student");
const assert = require('assert')
describe('Read Tests', () => {
	let user;
	beforeEach((done) => {
        try{
            user = new Student({
                name: 'user',
            });
            user.save().then(() => {
                done();
            }).catch(err=>{
                done(err)
            });
        }catch(err){
            done(err)
        }
	
	});
    it('Read the User : user', (done) => {
        Student.findOne({ name: 'user' }).then((student) => {
            assert.strictEqual(user._id.toString(), student._id.toString());
            done();
        }).catch(err=>done(err));
    });
});