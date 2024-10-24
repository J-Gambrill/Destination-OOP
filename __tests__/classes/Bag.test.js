const Bag = require('./classes/Bag.js')
const { describe, it, expect } = require('@jest/globals')

describe('Bag', () => {
    
    const b1 = new Bag(100, 1234, 'James')
    
    test('Is an instance created?', () => {
        expect(b1).toBeInstanceOf(Bag)
    })

    test('Is weight and id assigned?', () => {
        expect(b1.weight).toBe(100);
        expect(b1.id).toBe(1234);
    });

    test('Who is the owner?', () => {
        expect(b1.getOwner()).toBe('James')
    })

    test('Assign new owner', () => {
        b1.assignOwner('Amelia')
        expect(b1.getOwner()).toBe('Amelia')
    })

})