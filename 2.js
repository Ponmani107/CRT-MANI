// const capitals=new map(
//     [
//         ["india","new delhi"]
//         ["usw","oris"]
//     ]
// );

const capitals=new Map();
const capitals=new Map();
capitals.set("india","new delhi");
capitals.set("france","paris");
capitals.set(123,"number key")
console.log(capitals.get("india"));
console.log(capitals.has("france"));
capitals.delete("france");
console.log(capitals);
capitals.get("india");


function greet(name){
    return `hello, ${name}!`;
}
console.log(greet("world"));
let a = 10;
let b = 20;
let sum = function(x,y){
    return x + y;
}
let sum2=(x,y)=>x+y;
let greater=(x,y)=>x>y ? x : y;

console.log(greater(a,b));
console.log(sum2(a,b));
console.log(sum(a,b));
