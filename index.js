const addArr = (arr)=>{

    const num = arr.filter((val)=>{
      return val > 0
    })
    const sum = num.reduce((a,b)=> a + b)
    return sum
}

console.log(addArr([1,2,-3, 4, 5]))
console.log(addArr([10,20,30,50,60   ]))