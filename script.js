Array.prototype.myMap=function(callback){
  let result=[];

  for(let i in this){
    result.push(callback(this[i],i,this));
  }

  return result;
}

console.log([1,2,3].myMap((item,i,arr)=>{
  console.log(i,arr);
  return item*2;
}))