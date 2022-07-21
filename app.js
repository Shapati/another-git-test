// =

// program to sume 5 positive intergers

const sumArray = ([...arr]) => {
    const num = arr.filter(el => {
        return (typeof el === 'number' && el>=1)
    })

    const sum = num.reduce((a, b) => a + b)

    return sum

}

console.log(sumArray([1,2,3,4,9]));

aa