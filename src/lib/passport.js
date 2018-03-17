import User from '../models/User';
import passport from 'koa-passport';
import { LocalStrategy } from 'passport-jwt';

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function(username, password,done){
    User.findOne({ username : username},function(err,user){
        return err
            ? done(err)
            : user
                ? password === user.password
                    ? done(null, user)
                    : done(null, false, { message: 'Incorrect password.' })
                : done(null, false, { message: 'Incorrect username.' });
    });
}));


