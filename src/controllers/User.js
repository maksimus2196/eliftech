import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import User from '../models/User';
import passport from 'koa-passport';

@controller('/user')

export default class TestCtrl extends BaseCtrl {
    @get('')
    async getList(ctx) {
            try {
                const items = await User.find();
                ctx.ok(items);
            } catch (err) {
                ctx.throw(HttpStatus.BAD_REQUEST, err.message);
            }
        await passport.authenticate('jwt', function (err, user) {
            if (user) {
                ctx.body = "hello " + user.displayName;
            } else {
                ctx.body = "No such user";
                console.log("err", err)
            }
        } )
    }



    @post('')
    async getItemById(ctx) {
        // empty
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
