const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function () {
    let paint;

    beforeEach (function() {
        paint = new Paint (2);
    })

    it('should have a number of litres', function() {
        let actual = paint.litres;
        assert.strictEqual(actual, 2);
    })

    it('should check if it\'s empty', function() {
        let actual = paint.empty;
        assert.strictEqual(actual, false);
    })

    it('should be able to empty itself', function() {
        paint.isEmpty();
        let actual = paint.empty;
        assert.strictEqual(actual, true);
    })
})