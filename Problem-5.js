
const numbers =[1, 2, 2, 3, 4, 4]
function NoDuplicates(arr){
    const uniqueNumbers =[]
    for(const num of arr){
        if(uniqueNumbers.includes(num)===false){
            uniqueNumbers.push(num)
        }
    }
    return uniqueNumbers
}


const uniquearry=NoDuplicates(numbers)
console.log(uniquearry)