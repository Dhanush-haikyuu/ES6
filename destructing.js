
// //array destructing
// const result=[1,2,3,4,5,6]
// const [first,second,...remain]=result;
// console.log(first);
// console.log(second);
// console.log(remain);

// object destructing

// const Obj={
//     name:"dhanush",
//     age:20,
//     contact:7010617541,
// }
// const {nam,age,contact}=Obj;
// console.log("naming :",nam);
// console.log("age:",age);
// console.log("contact :",contact)

// nested destrucing

const obj={
    nam:"dhanush",

    mark:[49,43,45],
}
const {nam,mark:[maths,science,social]}=obj;
console.log("Name :",nam);
console.log("maths :",maths);
console.log("Social :",social);
console.log("Science :",science);

