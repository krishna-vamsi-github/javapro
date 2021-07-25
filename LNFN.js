function myfunction(){
    var name= document.getElementById("string").value;
    let firstname='';
    let secondname='';
    for(let i=0;i<name.length;i++)
{
    if(name[i]===' ')
    {
        for(let j=i;j<name.length;j++)
        {
            firstname+=name[j];
        }
        break;
    }
    secondname+=name[i];
}       
    document.getElementById("result1").innerHTML =firstname+secondname;
}
