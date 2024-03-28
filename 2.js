// Write a method to calculate the age of the car based on the current year.

class car {
    constructor(make,model,year){
        this.make=make
        this.model=model
        this.year=year
    }


calculateCarAge = ()=>{
    const currentYear=new Date().getFullYear()
    return currentYear-this.year
}
}

const myNewCar= new car ('TATA','SUV','2022')
console.log (`My new car brand is ${myNewCar.make} and age of my car is ${myNewCar.calculateCarAge()}`)