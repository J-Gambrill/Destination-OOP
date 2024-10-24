class Airport {

        #airportCode
    constructor(name, airportCode, planes = []){
        this.name = name
        this.planes = planes
        this.#airportCode = airportCode
    }

    getPlanes(){
        return this.planes
    }

    addPlane(plane){
        this.planes.push(plane)
    }
    

}


module.exports = Airport;