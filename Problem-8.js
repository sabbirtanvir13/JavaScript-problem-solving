
const capital = "hello world";
let result = '';
for (let i = 0; i < capital.length; i++) {

    if (i === 0 || capital[i - 1] === ' ') {
        result += capital[i].toUpperCase(); 
    } else {
        result += capital[i];
    }
}


console.log(result);
