const numbers=[5, 1, 9, 3]
 
function getMax(numbers){
    let max=numbers[0]
    for(const num of numbers){
        if(num>max){
            max=num
        }
    }
    return max
}
const maximum=getMax(numbers)
console.log(maximum)