import User from '../models/User';
import passport from 'passport-jwt';


const jwtOptions = {
    jwtFromRequest: passport.ExtractJwt.fromAuthHeader(),
    secretOrKey: '3kzQJ6zU1aXd'
};

passport.use(new passport.JwtStrategy(jwtOptions, function (payload, done) {
        User.findById(payload.id, (err, user) => {
            if (err) {
                return done(err)
            }
            if (user) {
                done(null, user)
            } else {
                done(null, false)
            }
        })
    })
);
