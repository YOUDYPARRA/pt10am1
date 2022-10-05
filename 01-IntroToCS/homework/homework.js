'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum=0;
  let arr=num.split('');
  //console.log(arr);
  for (let index = 0; index <= arr.length; index++) {
    if(arr[index]=="1"){
      sum=sum+Math.pow(2,index);
    }
  }
  return npmsum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin="";
  let div=num;
  let temp;
  while (div >= 1) {
    temp=parseInt(div/2);//se usa Math.floor(),
    //console.log(temp);
    bin=bin+parseInt(div%2);
    div=temp;
    //console.log(bin);
  }
  let arr=bin.split('');
  let rev=arr.reverse();
  return rev.join('');
}
//console.log(BinarioADecimal("4"));
console.log(DecimalABinario(4));
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}