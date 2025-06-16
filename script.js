console.log("NAME FUNCTION STARTS: ");
function greet(name){
    return "Hello, " + name + "!";
}

console.log(greet("Milana"));

function greet2(name2 ="Humber"){
    return "Hello, " + name2 + "!";
}

console.log(greet2());
console.log(greet2("Milana"));
console.log("NAME FUNCTION ENDS: ");



console.log("addNumbers function starts: ");
function addNumbers(num1, num2){
    return num1 + num2;

}

console.log("SUM =", addNumbers(5,9));
console.log("SUM =", addNumbers(45,12));
console.log("SUM =", addNumbers(14,36));
console.log("SUM =", addNumbers(78,69));
console.log("Multiplication = ", addNumbers(6,9));
console.log("Division = ", addNumbers(12,6));
console.log("Subtraction = ", addNumbers(25,12));


console.log("addNumbers function ends: ");

console.log("Global and Local variable starts:");

let a = 25;
console.log("Global: ", a);


function changeValue(){
    let b = 50;
    let c = 13;
    console.log("Local: ", b);
    console.log("Local: ", c);

}

console.log("Global and Local variables ends:");


console.log("Cosure funsction: ");
function outerFunction(){
    let count=0;
    return function(){
        count++;
        console.log("Count: ", count);
    }
}

const counter = outerFunction();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();


function evenCounter(){
    let count1 =0;
    return function(){
        count1 +=2;
        console.log("evenCounter: ", count1);
    };
}

const evenCount = evenCounter();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
evenCount();
console.log("Global and Local ends:");



