/////////////

////to get no of words and count letters

let str="she sells sea shells on the sea shore";
console.log(str.length);
let countWords=1;let countLetters=0;
for(i=0;i<str.length;i++)
{
    if(str[i]==' ')
    countWords++;
    else
    countLetters++;
}
console.log(countLetters+' '+countWords);