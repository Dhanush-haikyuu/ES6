// const obj={
//     name:"dhanush",
//     initial:"U",
//     greet:function(){
//         return this.name+" "+this.initial;

//     }
    
// };
// console.log(obj.greet());

function Person (name){
    this.name=name;
    this.initial="U"
    this.great=function(){
        return this.name+" "+this.initial;
    }
}

const data=new Person("Dhanush");
console.log(data.great())
