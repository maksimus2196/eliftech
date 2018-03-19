import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import {passport, checkUser} from'../lib/passport';

@controller('/authorize',checkUser)

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

            var username = ctx.request.body;
            var password = ctx.request.body;

        }
        catch (err) {
            console.log(err);
        }
    }
}