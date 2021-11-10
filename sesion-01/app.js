/**************PRIMITIVES****************/
//*******Strings**********/
var nombre = "Caro";
var edad = 25;
var texto = "Esto es texto";
//*********Numbers*********/
var numero = 234234234;
//*******Booleans*********/
var verdadero = true;
var falso = false;




/*************COMPOUNDS**************/
/*** Objects ***/
var persona = {
    //property: value
    name: "caro",
    age:25,
    woman: true
};

/*****Arrays******/
var namesOfStudents = [name1, name2, name3];

/*****Functions*****/
var suma = function (num1,num2){
    return num1 + num2;
}


/**********************SPECIAL ONES**************/
var numero = undefined; //not defined
var numero2= null; //declared but empty


//*****Changing type of datas******/
var userNumber = prompt('whats your number');
//Changing string to number:
var userNumber = number(prompt('whats your number'));
//number();
//string();
//boolean();


//examples
var a = 5;
var b = 10;
var c = 15;

console.log(a+b)
console.log(b-a)
console.log(a*c)
console.log(c/a)
console.log(b%a)
