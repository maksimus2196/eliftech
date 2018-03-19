import User from '../models/User';
import { LocalStrategy,passport } from 'koa-passport';


passport.use(new LocalStrategy({
    username: 'username',
    password: 'password'
}, function (username, password, done) {
        User.findOne({username}, (err, user) => {
            if (err) {
                return done(err);
            }

            if (!user || !user.checkPassword(password)) {
                return done(null, false, {message: 'Нет такого пользователя или пароль неверен.'});
            }
            return done(null, user);
        });
    }
));
function checkUser (err,next) {

    if (ctx.user){
        return(next);
    }
    else
        {
            return (err);
        }
}
module.exports.checkUser();
