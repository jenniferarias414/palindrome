// Write your code below
function isPalindrome(word) 
{
let wordReversed = ""

for (let i=word.length-1; i >= 0; i--)
{
    wordReversed += word[i]
}
if (word === wordReversed)
{
return true
}
else {
    return false 
}
}

console.log(isPalindrome("noon"))
console.log(isPalindrome("tacocat"))