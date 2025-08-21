// let name="john"
// let age=25;
// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// let obj = new person(name,age);
// console.log(obj);

const setA=new Set([1,2,3]);
const setB=new Set([3,4,5]);

const unionSet=new Set([...setA,...setB]);
console.log(unionSet);






