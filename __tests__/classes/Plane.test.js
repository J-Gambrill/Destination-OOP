const Plane = require('./classes/Plane.js')
const { describe, it, expect } = require('@jest/globals')

describe('Plane', () => {
    
    const pl1 = new Plane('BA', 'Ibiza', 'UK')
    
    test('Is an instance created?', () => {
        expect(pl1).toBeInstanceOf(Plane)
    })

    test('Is a Company + destination + origin created?', () => {
        expect(pl1.company).toBe('BA')
        expect(pl1.destination).toBe('UK')
        expect(pl1.origin).toBe('Ibiza')
    })

    
    test('Is an empty array created?', () => {
        expect(pl1.passengers).toEqual([])
    })

    
    test('Is a person added', () => {
        pl1.addPassenger('James')
        expect(pl1.getPassengers()).toEqual(['James'])
        expect(pl1.getPassengers().length).toBe(1)
    })


})