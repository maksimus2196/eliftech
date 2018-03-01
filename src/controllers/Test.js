import HttpStatus from 'http-status-codes';
import { controller, get, post, put, del } from 'koa-dec-router';
import BaseCtrl from './Base';
import mongoose from 'mongoose';
import User from '../models/User';
import passport from 'passport';

console.log('Connect');
console.log(mongoose.version);
@controller('/test')

export default class TestCtrl extends BaseCtrl {
    @get('')
    async getList(ctx) {
        User.create({

            userneme :'Mask',
            password :'1111',
                firstname:'Maksim',
                secondname:'Hibovskiy',
                age : '22'
        });

        try {
            const items = await User.find().lean();

            ctx.ok(items);
        } catch (err) {
            ctx.throw(HttpStatus.BAD_REQUEST, err.message);
        }
        User.save();

    }

    @post('')
    async createItem(ctx) {

        passport.authenticate('local', { failureRedirect: '/login' }),
            function(req, res) {
                res.redirect('/');
            };}

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
