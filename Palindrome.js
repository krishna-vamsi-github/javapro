////////////////

////////to check palindrome

let str='vikiv';
let j=str.length-1;
let isPalindrome=true;
for(i=0;i<j;i++,j--)
{
    if(str[i]!=str[j])
    {
        isPalindrome=false;
        break;
    }
}
if(isPalindrome==true)
console.log(str+' is palindrome');
else
console.log(str+' is not palindrome');