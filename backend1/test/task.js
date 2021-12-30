const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app');

//Assertion Style

chai.should();

chai.use(chaiHttp);


    describe('Tests get Users', () => {
        it('Test GET User', (done) => {
            let id = 1;// post id
            chai.request('https://jsonplaceholder.typicode.com/users') // Server Address
                .get('/') // endpoint with we will test
                .end((error, response) => { // tests to make
                    response.should.have.status(200);// status have to be equal the 200
                    response.should.be.json;// the response must be a json   
                    response.body.should.be.a('array');// the response must have only one object
                    
                  done(); //done with the test
                });
        });
});

