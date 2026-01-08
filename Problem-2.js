const Vowles= "programming"
let count=0
const VowleList='aoiue'
for(let i = 0;i<Vowles.length;i++){
    if(VowleList.includes(Vowles[i])){
        count++
    }
}
console.log(count)