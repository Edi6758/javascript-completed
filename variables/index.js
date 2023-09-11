/**
 * some verified cases, the VAR variable can be accessed regardless of its scope
 */

//in var its ok
if(true){
    var nome="Bruno";
}
console.log(nome);

/**
 * The LET variable, on the other hand, 
 * defines precisely its scope and can only be called within the scope it has been declared
 */

//in let its not ok
if(true){
    let nome="Bruno";
}
console.log(nome);

/**
 * In const it is impossible to change the value of the const during the code
 */
//const use example
const nome="Bruno";
console.log(nome);

/**
 * Because javascript is weakly typed you can do type casting, 
 * a type-value change in the language
 */
//type casting
let num=5;
console.log(num);
num=String(num);
console.log(num);
