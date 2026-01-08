const EvenNumbers= [1, 2, 3, 4, 5, 6]
const EvenList=[]
for(let i=0;i<EvenNumbers.length;i++){
    if(EvenNumbers[i]%2===0){
        EvenList.push(EvenNumbers[i])
    }
}
console.log(EvenList)