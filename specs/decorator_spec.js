const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function() {
    let decorator;

    beforeEach (function() {
        decorator = new Decorator();
    })

    it('should start with an empty paint stock', function() {
        let actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })

    it('should be able to add a can of paint to stock', function() {
        let paint = new Paint (2);
        decorator.addPaint(paint);
        let actual = decorator.stock
        assert.deepStrictEqual(actual, [paint] );
    })

    it('should be able to calculate total litres in stock', function() {
        let paint1 = new Paint (2);
        let paint2 = new Paint (4);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        let actual = decorator.totalLitres();
        assert.strictEqual(actual, 6);
    })

    it('should be able to calculate if it can paint a room', function() {
        let paint1 = new Paint (2);
        let paint2 = new Paint (4);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        let room = new Room (10);
        let actual = decorator.paintRoom(room);
        assert.strictEqual (actual, false);
    })

    it('should be able to paint a room', function() {
        let paint1 = new Paint (2);
        let paint2 = new Paint (4);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        let room = new Room (6);
        decorator.paintRoom(room);
        let actual = room.painted;
        assert.strictEqual (actual, true);
    })

    it('should be able to decrease litres of paint in stock',  function () {
        let paint1 = new Paint (2);
        let paint2 = new Paint (4);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        let room = new Room (6);
        decorator.paintRoom(room);
        let actual = decorator.totalLitres();
        assert.strictEqual(actual, 0);
    })

    it('should remove empty cans from the stock', function () {
        let paint1 = new Paint (2);
        let paint2 = new Paint (4);
        decorator.addPaint(paint1);
        decorator.addPaint(paint2);
        let room = new Room (6);
        decorator.paintRoom(room);
        let actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
})