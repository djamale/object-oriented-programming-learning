class Human {
    constructor(name,age){
        this.name = name
        this.age = age || 1
    }
}

const jamal = new Human ("Jamal", 30)
console.log(jamal);