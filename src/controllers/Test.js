import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import User from '../models/User';
import passport from 'koa-passport';

@controller('/')

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
        var username = ctx.request.body;
        var password = ctx.request.body;
        passport.Authenticator('local', {failureRedirect: '/login'});
            console.log('Hello');
    }
    catch(err)
    {
        console.log(err);
    }
}

    @get('/:_id')
    async getItemById(ctx) {
        // empty
    }

    @put('/:_id')
    async updateItem(ctx) {
        // empty
    }

    @del('/:_id')
    async deleteItem(ctx) {
        // empty
    }
}
