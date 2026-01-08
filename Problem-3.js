
function checkPalindrome(i) {
    let reversed = i.split('').reverse().join('');
    return i === reversed;
}

console.log(checkPalindrome("madam")); 
console.log(checkPalindrome("hello")); 