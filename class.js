class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    static about() {
      return "Rectangles are circles except with straigh lines!"
    }
    get calcArea() {
          return this.height * this.width
    }
}

let r1 = new Rectangle(10,20)

// r1.height // returns 10
// r1.width  // returns 20

r1.calcArea
Rectangle.about()
// r1.about()
class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    static about() {
      return "Rectangles are circles except with straigh lines!"
    }
    get calcArea() {
          return this.height * this.width
    }
}

let r1 = new Rectangle(10,20)

// r1.height // returns 10
// r1.width  // returns 20

//r1.calcArea //// 200
//Rectangle.about() ////"Rectangles are circles except with straigh lines!"
// r1.about() //// doesnt work

class Square extends Rectangle {
  constructor(side) {
    super(side, side)
  }

  funnyMethod() {
    return super.calcArea + "...wow thats huge"
  }
}

let s1 = new Square(10)
s1.funnyMethod()

// s1.width //// 10
// s1.height //// 10

//s1.calcArea //// 100









class Human {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    get identity() {
      return this.printIdentity()
    }

printIdentity() {
      return `My name is ${this.name}, and I am a ${this.age} year old ${this.gender}`
    }
    
}


let Mike = new Human("Mike", 27, "male")
Mike.identity



class SuperHuman extends Human {
  constructor(name, age, gender, alias, superpower) {
    super(name, age, gender)
    this.alias = alias
    this.superpower = superpower
    }

    superIdentity() {
      return super.identity + `...but my real identity is ${this.alias} and I can ${this.superpower}.`
    }
  }


let Spiderman = new SuperHuman("Mike", 27, "male", "Spiderman", "Develop Webs")

Spiderman.superIdentity()