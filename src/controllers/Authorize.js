import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import {passport, checkUser} from'../lib/passport';

@controller('/authorize',checkUser)

export default class TestCtrl extends BaseCtrl {
    @get('',checkUser)

    @post('')

    async createItem(ctx) {
        try {

            var username = ctx.request.body;
            var password = ctx.request.body;
            User.authorize(username, password, function(err, user) {
                if (err) {
                    return statusCode(401);
                }
                    else {
                        return statusCode(200);
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    }
}