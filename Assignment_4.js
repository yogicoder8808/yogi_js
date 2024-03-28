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

// Define a class representing a Car with properties like make, model, and year.

    const myNewCar= new car ('TATA','SUV','2022')
    console.log("My New Car Name is : " + myNewCar.make)
    console.log("My New Car Model is : " +myNewCar.model)
    console.log("My New Car Purchased year is : " +myNewCar.year)

// Write a method to calculate the age of the car based on the current year.

    console.log ("My new car age is :"+ myNewCar.calculateCarAge())


// Implement inheritance by creating a subclass of Car (e.g., ElectricCar) with additional properties and methods.
    
class ElectricCar extends car{
    constructor(make,model,year,batteryCapacity){
    super(make,model,year)
    this.batteryCapacity=batteryCapacity
    }
}
                        
    const myElectricCar= new ElectricCar ('Tesla','Model Z','2023','100kWh')

    console.log("My Electric Car Name is : " + myElectricCar.make)
    console.log("My Electric Car Model is : " +myElectricCar.model)
    console.log("My Electric Car Purchased year is : " +myElectricCar.year)
    console.log("My Electric Car is " +myElectricCar.year + "year old")
    console.log("My Electric Car battery capacity is :" +myElectricCar.year )
                        
    console.log(" ")
//Use ES6 features like Arrow Functions and Template Literals to refactor existing code and improve readability.

    console.log(`My new car brand is ${myNewCar.make} and model is ${myNewCar.model} and lauched year is ${myNewCar.year}`)
    console.log (`My new car age is ${myNewCar.calculateCarAge()}`)
    console.log (`My new Electric car brand is ${myElectricCar.make} and model is ${myElectricCar.model} and lauched year is ${myElectricCar.year}`)
    console.log (`My electric car is ${myElectricCar.calculateCarAge()} year old and my New Electric car battery capacity is ${myElectricCar.batteryCapacity}`)