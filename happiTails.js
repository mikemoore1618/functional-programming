class Animal{
    constructor(name, age, gender) { //// dont need clenakliness here bc it will be set dynamically (random) //// dont need toys here bc it will be empty
        this.name = name
        this.age = age
        this.gender = gender
        this.cleanliness = Math.random() * 100
        this.toys = []
    }


    //getter method getInfo that returns a string: This is ${name}, a ${age} old ${gender}.
get getInfo() {
      return `This is ${this.name}, a ${this.age} old ${this.gender}.`
    }


//method to add a toy
addToy(toy) {
    this.toys.push(toy)
    return this.toys
}

//method to remove toy by name
removeToy(toy) {
    const index = this.toy.indexOf(toy)
    this.toy.splice(index, 1)
    return this.toys
}

//getter method to return all animals toys in alphabetical order

get allToys() {
 return this.toys.sort()
}

//method to take bath to increase cleanliness to 100, if attribute is already 100, return string " ${name} is clean!" 

takeBath() {
    if (this.cleanliness === 100) {
    return  `${this.name} is clean!`
    } else {
        this.cleanliness = 100
        return this.cleanliness
    }
  }
} 


let Luna = new Animal("Luna", 3, "female")

// console.log(Luna.name)
// console.log(Luna.age)
// console.log(Luna.gender)
// console.log(Luna.toys)
// console.log(Luna.cleanliness)

// console.log(Luna.getInfo)
// console.log(Luna.addToy('ball'))
// console.log(Luna.removeToy('ball'))
// console.log(Luna.allToys)
// console.log(Luna.takeBath())


////////part 2

class Dog extends Animal {
    constructor(name, age, gender, breed ) {
    super(name, age, gender)
    this.breed = breed
    this.vaccinated - false
    }

    getInfo() {
        return super.getInfo + `${this.breed}`
    }

    gotVaccine() {
        this.vaccinated = true
        return this.vaccinated
    }
}

class Shelter {
    constructor(name) {
        this.name = name
        this.dogs = []
    }

    changeName(newName) {
        this.name = newName
        return this.name
    }

    rescueDog(dog) {
        this.dogs.push(dog)
    }

    dogAdopted(dogName) {
        // return this.dogs
        let index = this.dogs.indexOf(dogName)
        return this.dogs.splice(index, 1)
    }
    get getDogs() {
        return this.dogs.sort()
    }

}




let Luna = new Dog("Luna", 3, "female", "Cattle Dog")

// console.log(Luna.getInfo())
// console.log(Luna.gotVaccine())