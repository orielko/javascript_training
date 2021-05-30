let arr=[];
for(let i=1;i<=20;i++){
    //arr.push(Math.pow(i,2));
    arr.push(i*i);
}
console.log(arr);
let sum=0;
for(const item of arr){
    sum+=item;
}
console.log("Average:",sum/arr.length);