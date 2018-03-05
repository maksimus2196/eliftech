process.env.NODE_ENV ='test';

// let mongoose = require ('mongoose');
let User = require('../models/User');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../lib/server');
// let should = chai.should();
chai.use(chaiHttp);
/* describe('User', () => {
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    }); */
    describe('/GET user', () => {
        it('it should GET all the user', (done) => {
            chai.request(server)
                .get('/api/user')
                .end((err, res) => {
                if(err){
                    console.log(err);
                }
                else
                res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    })

