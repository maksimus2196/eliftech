import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import User from '../models/User';
import {passport, checkUser} from '../lib/passport';
@controller('/user_setting')


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

    @put('')

    async createItem(ctx) {
        try {
            User._find();
            User.username = ctx.request.body,
            User.password = ctx.request.body,
            User.inform = ctx.request.body,
            User.age = ctx.request.body,
            User.firstname = ctx.request.body,
            User.secondname = ctx.request.body

        }
        catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }

}}