const Person = require('./classes/Person.js')
const { describe, it, expect } = require('@jest/globals')


describe('Person', () => {
    
    const p1 = new Person('James', 'UK')
    
    test('Is an instance created?', () => {
        expect(p1).toBeInstanceOf(Person)
    })

    test('Is a name + destination created?', () => {
        expect(p1.name).toBe('James')
        expect(p1.destination).toBe('UK')
    })

    test('Is an empty array created?', () => {
        expect(p1.getBags).toEqual([])
    })

    test('Is an instance created?', () => {
        p1.addBag('bag1')
        expect(p1.getBags()).toEqual(['Bag1'])
        expect(p1.getBags().length).toBe(1)
    })


})