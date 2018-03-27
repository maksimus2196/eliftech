import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import passport,{checkUser} from '../lib/passport';

@controller('/checkU')

export default class TestCtrl extends BaseCtrl {
    @get('', checkUser)
    async getList(ctx) {
        try {
            const items = await ctx.state.user;
            ctx.ok(items);
            console.log(items);
        } catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }

    }
}