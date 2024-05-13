function calculate(...num){
    return num.reduce((total,number)=>total+number,0)
}





console.log(calculate(2,3,4,5,6,65,6,7));