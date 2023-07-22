var strName = "Edureka";
var age1 = 30;
var age2 = 45;
var ageIsEqual = age1 == age2;
var ageDiff = age1 - age2;
var age1Str = '30';
var age1IsEqual = age1 == age1Str;
var age1IsEqualDatatype = age1 === age1Str;

console.log("strName             : ", strName);
console.log("age1                : ", age1);
console.log("age2                : ", age2);
console.log("ageIsEqual          : ", ageIsEqual);
console.log("ageDiff             : ", ageDiff);
console.log("age1IsEqual         : ", age1IsEqual);
console.log("age1IsEqualDatatype : ", age1IsEqualDatatype);


function sayHello(name) {
    return 'Hello ' + name + ' !!!'
}

console.log(sayHello(strName));

var sayHelloFunction = function(name) {
    return 'Hello (function) ' + name + ' !!!';
}

console.log(sayHelloFunction);
