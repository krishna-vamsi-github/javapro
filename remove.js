////////////////

////function to remove unnecessary information
let temp=[],j=0;
let array=[0,1,false,2,undefined,3,null];
for(i=0;i<array.length;i++)
if(array[i]>=1&&array[i]<=9)
temp[j++]=array[i]; 
console.log(temp);