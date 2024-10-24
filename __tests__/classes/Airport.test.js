const Airport = require('./classes/Airport.js')
const { describe, it, expect } = require('@jest/globals')


describe('Airport', () => {
    
    const a1 = new Airport('Ibiza airport', 'IBZ')
    const plane1 = { company: 'BA', destination: 'UK' }; // Mock plane object

    test('Is an instance created?', () => {
        expect(a1).toBeInstanceOf(Airport)
    })

    test('Is a name + planes created?', () => {
        expect(a1.name).toBe('Ibiza airport')
        expect(a1.planes).toEqual([])
    })

    test('Is a plane created?', () => {
        a1.addPlane(plane1)
        expect(a1.getPlanes()).toEqual([plane1])
    })


})
