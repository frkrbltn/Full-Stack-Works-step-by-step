// handle difference between == and ===

console.log("2 == 2 is", 2=="2", "2 === '2' is", 2 ==='2')
// understand the place holder in string

let a = 'place holder'
// console.log(`place holder with "`` done by "${a}`)

// work on the objects and called the access of objects, 
// object properties and object methods with key value pair

let obj = {
    a: 'a',
    b: 'b',
    c: 2,
    d: {
       x: 'x' 
    }
}

for (const properties in obj) {
    console.log("properties ", properties)
}

console.log('nested', obj.d.x)

for (const prop in obj) {
    console.log("You can access by using obj[proerties]= ", obj[prop])
}
// work on the arrays that have different objects in it
arr = ['2', 2, 'String', 1.5]
// print arrays by for each loop
for (const a of arr) {
    console.log("access it, ", a)
}

arr.forEach(element => {
    console.log(element)
});



// work on the functions
console.log('-----------FUNCTIONSSS---------------')
console.log()

arr2 = [1,2,3,4,5]

const arrSum = (param) => {
    let x = 0
    param.forEach(element => {
            x += element
        }
    )

    return x;
}

console.log("Function1 ", arrSum(arr2))


const arr3 = [5,4,3,2,1]

arr3.forEach(element => console.log(element))

const func2 = (params) => {
    let y = 0;

    params.forEach(element => y = y - element)

    return y
}

console.log('Function2 ', func2(arr3))