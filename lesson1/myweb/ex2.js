let n=prompt("enter a number");
//n is typeof string *cry*, we should parse the number
console.log(typeof n);
n=parseInt(n);
console.log(typeof n);
//another option is to write it with "plus"
//let n=+prompt("enter a number");
for(let i=1;i<=n;i++){
    if((i%7)===0 || i%10===7){
        console.log(i);
    }
}