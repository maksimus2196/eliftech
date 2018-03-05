import mongoose from 'mongoose';
import crypto from 'crypto';
import async from 'async';


var Schema = mongoose.Schema;

var schema = new Schema({
    username: {type: String, requare: true},
    password:{type:String, requare:true},
    firstname:{type:String, requare:true},
    secondname:{type:String, requare:true},
    age:{type:String, requare:true},

});
schema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('passwords')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() { return this._plainPassword; });


schema.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.authorize = function(username, password, callback) {
    var User = this;

    async.waterfall([
        function(callback) {
            User.findOne({username: username}, callback);
        },
        function(user, callback) {
            if (user) {
                if (user.checkPassword(password)) {
                    callback(null, user);
                } else {
                    callback(new AuthError("Пароль неверен"));
                }
            }
        }
    ], callback);
};

function AuthError(message) {
    Error.apply(this, arguments);
    Error.captureStackTrace(this, AuthError);

    this.message = message;
}


AuthError.prototype.name = 'AuthError';

exports.AuthError = AuthError;
export default mongoose.model('User',schema);
// GET /accounts"?"(seach google) userid
// export default filter(){}