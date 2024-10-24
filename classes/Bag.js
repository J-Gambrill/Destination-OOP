class Bag {

    #person
    constructor(weight, id, person = null){
        this.weight = weight
        this.id = id
        this.#person = person; 
    }

    getOwner() {
        return this.#person
    }

    assignOwner(person) {
        this.#person =  person
    }

}


module.exports = Bag;