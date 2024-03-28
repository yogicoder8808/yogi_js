let Students = {
    Name:["Arun","Balu"],
    Age:[17,18],
    Class:[11,12]
}

let is_school_open = true;

    let info = new Promise((resolve,reject) => {
        if (is_school_open)
        {
            setTimeout(()=>
            {
                resolve(console.log("School is Open"))

            },1000)
                
        }else
        {
           reject(console.log("School is closed"))
        }
    })

    .then(()=>{
        setTimeout(()=>{
            console.log(`${Students.Name[0]} is Present`, "-",  `${Students.Class[0]} th Standard`)
        },1000)
    })

    .then(()=>{
        setTimeout(()=>{
            console.log(`${Students.Name[1]} is Present`, "-",  `${Students.Class[1]} th Standard`)
        },2000)
    })

    .then(()=>{
        setTimeout(()=>{
            console.log(`Student name is ${Students.Name[0]}`,  `and Student age is ${Students.Age[0]}`)
        },1000)
    })

    .then(()=>{
        setTimeout(()=>{
            console.log(`Student name is ${Students.Name[1]}`,  `and Student age is ${Students.Age[1]}`)
        },3000)
    })

    .catch(()=>{
        console.log("Students are Left")
    })

    .finally(()=>{
        setTimeout(()=>{
            console.log("Day ended, School is closed")
        },4000)
    })
