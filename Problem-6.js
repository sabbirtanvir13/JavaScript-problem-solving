function sumofnumbers(numbers){
    let sum=0
    for(const num of numbers){
        sum+=num
    }

        return sum
}
const numbers= [1, 2, 3, 4]
const total=sumofnumbers(numbers)
console.log(total)