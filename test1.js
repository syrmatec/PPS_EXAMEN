const assert = require('assert');
const operations = require('../operations');

describe('Tests con assert (test1.js)', function () {
    it('suma(2, 3) debería devolver 5', function () {
        assert.strictEqual(operations.suma(2, 3), 5);
    });

    it('resta(5, 2) debería devolver 3', function () {
        assert.strictEqual(operations.resta(5, 2), 3);
    });
});
