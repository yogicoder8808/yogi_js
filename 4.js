// Implement inheritance by creating a subclass of Car (e.g., ElectricCar) with additional properties and methods.

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

class ElectricCar extends car{
    constructor(make,model,year,batteryCapacity){
        super(make,model,year)
        this.batteryCapacity=batteryCapacity
}
}


const myElectricCar= new ElectricCar ('Tesla','Model Z','2023','100kWh')
console.log (`My new Electric car brand is ${myElectricCar.make} and model is ${myElectricCar.model} and lauched year is ${myElectricCar.year}`)
console.log (`My electric car is ${myElectricCar.calculateCarAge()} year old and my New Electric car battery capacity is ${myElectricCar.batteryCapacity}`)

