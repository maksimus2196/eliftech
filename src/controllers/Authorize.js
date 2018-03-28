import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import passport,{ checkUser ,} from'../lib/passport';
import jwt from 'jsonwebtoken';

@controller('/authorize')

export default class TestCtrl extends BaseCtrl {
    @get('')

    @post('')

    async createItem(ctx) {
        try {

            var username = ctx.request.body.username;
            var password =  ctx.request.body.password;
            return passport.authenticate('local', function (err, user, info, status) {
                if (user === false) {
                    ctx.body = {success: false}
                    ctx.throw(401)
                } else {

                    ctx.status = 200;
                    ctx.set('authorization', jwt.sign({ _id: user.username }, 'A very secret key'));
                    ctx.body = {
                        token: jwt.sign({ _id: user._id }, 'A very secret key'),
                        message: "Successfully logged in!"
                    };

                    ctx.ok(user);

                    return ctx;
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}
