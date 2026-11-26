const should = require('should');
const operations = require('../operations');

describe('Tests con should (test2.js)', function () {
    it('suma(-2, -3) debería devolver -5', function () {
        operations.suma(-2, -3).should.equal(-5);
    });

    it('resta(2, 5) debería devolver -3', function () {
        operations.resta(2, 5).should.equal(-3);
    });
});
