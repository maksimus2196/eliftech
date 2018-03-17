




import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import User from '../models/User';
import passport from 'koa-passport';

@controller('/registration')

export default class TestCtrl extends BaseCtrl {
    @get('')
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
            var user = new User(user.username = ctx.request.body,
            user.password = ctx.request.body,
            user.inform = ctx.request.body,
            user.age = ctx.request.body,
            user.firstname = ctx.request.body,
            user.secondname = ctx.request.body
            );
            user.save();
            }
        catch (err) {
            console.log(err);
        }
    }
}

