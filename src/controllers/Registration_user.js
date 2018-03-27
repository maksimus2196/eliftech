import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import User from '../models/User';
import passport,{checkUser} from '../lib/passport' ;

@controller('/registration')

export default class TestCtrl extends BaseCtrl {
    @get('',checkUser)
    async getList(ctx) {
        try {
            const items = await User.find();
            ctx.ok(items);
        } catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
    }

    @post('')

    async createItem(ctx) {
        try {
            var user = new User(ctx.request.body);
            user.save();
            }
        catch (err) {
            console.log(err);
        }
    }
}

