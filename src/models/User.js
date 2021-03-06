import mongoose from 'mongoose';
import crypto from 'crypto';

var Schema = mongoose.Schema;

var schemaUser = new Schema({
    username: {type: String, requare: true},
    passwordHash:{type:String, requare:true},
    firstname:{type:String, requare:true},
    secondname:{type:String, requare:true},
    age:{type:String, requare:true},
    inform:{type:String,requare:false},
    salt:{type:String}

});
schemaUser.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        if (password) {
            this.salt = crypto.randomBytes(128).toString('base64');
            this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1');
        } else {
            this.salt = undefined;
            this.passwordHash = undefined;
        }
    })

    .get(function () {
        return this._plainPassword;
    });

schemaUser.methods.checkPassword = function (password) {
    if (!password) return false;
    if (!this.passwordHash) return false;
    return crypto.pbkdf2Sync(password, this.salt, 1, 128, 'sha1').toString() === this.passwordHash;
};
export default mongoose.model('User',schemaUser);
// GET /accounts"?"(seach google) userid
// export default filter(){}