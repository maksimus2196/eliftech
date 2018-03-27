import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import passport,{ checkUser } from'../lib/passport';

@controller('/authorize')

export default class TestCtrl extends BaseCtrl {
    @get('')

    @post('')

    async createItem(ctx) {
        try {

            var username = ctx.request.body.username;
            var password = ctx.request.body.password;
            return passport.authenticate('local', function (err, user, info, status) {
                if (user === false) {
                    ctx.body = {success: false}
                    ctx.throw(401)
                } else {
                    ctx.body = {success: true}
                    return ctx.login()
                }
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}