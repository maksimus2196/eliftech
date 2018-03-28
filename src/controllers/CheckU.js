import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import passport,{checkUser} from '../lib/passport';
import jwt from 'jsonwebtoken'
@controller('/checkU')

export default class TestCtrl extends BaseCtrl {
    @get('')
    async getList(ctx) {
        try {
            function get_User(token,secret) {

            const item = jwt.verify(token, secret);
            console.log(item);
            ctx.send(item);
        }
            var token = ctx.header.token;
            console.log(token);
            var secret = 'A very secret key';
        get_User(token,secret);
        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }
}



