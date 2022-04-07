//ejercicio 16

let data = [5,25,10,'s',5,'a','a'];

let result = data.filter((item,index)=>{
  return data.indexOf(item) === index;
})
console.log(result);

document.write(result);