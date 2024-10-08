// alert("Hello World.");
// var i = prompt("Please input a number");
// alert(i);

var j = 1;
//0000000000000...1=>+1
//1000000000000...1=>-1
console.log(j);
console.log(typeof j);

j = -1;
console.log(j);

//infinity check
var k = j / 0;
console.log(k);

var k = k - 1;
console.log(k);


var k = k * -1;
console.log(k);

console.log(k - k);


//Strings
var myString = '1';
console.log(myString);
myString = "1";
console.log(myString);

myString = `1`;
console.log(myString);



myString = `my k variable is: ${k}`;
console.log(myString);


myString = `my k variable is: ${j / 2}`;
console.log(myString);

//JSON notation
var myObject = {
    "key": "value"
};

console.log(myObject);



//DO NOT USE VAR, fro now on !
//var myVar; //undefined
let myLet;//undefined
const myConst = "I am const";
//ERROR: myConst = "I am not a const";
myLet = "I am not a const"
console.log(myLet)

let myBool = true;
myBool = false;
myBool = 3 > 2;
console.log(myBool)
console.log(!myBool)


let myArray = [1, "My Text", Date.now()];
for (let v = 0; v < myArray.length; v++) {
    console.log(`v is:${v} and current item is: ${myArray[v]}`)
}
for (let y = 0; y < 3; y++) {
    myArray.push(y);
}
for (let v = 0; v < myArray.length; v++) {
    console.log(`v is:${v} and current item is: ${myArray[v]}`)
}

console.log("Slice Started");

let mySlice = myArray.slice(2, 5);
for (let v = 0; v < mySlice.length; v++) {
    console.log(`v is:${v} and current item is: ${mySlice[v]}`)
}

let v1 = 1;
let v2 = 2;


if (v1 == v2 || v2 > 1) {
    //
}


// ternary operator

if (v1 > 1) {
    console.log(1);
} else {
    console.log(2);
}

let v3 = v1 > 1 ? console.log(1) : console.log(2);

//udefine 
let v4;
console.log(v4);
v4 = null;

console.log(v4);


console.log(5 + 1);
console.log("5" * 2);

//TODO:
for (var v5 = 0; v5 < 5; v5++) {
    let v7 = "";
    for (var v6 = 1; v6 < v5; v6++) {
        v7 = v7 + "#";
    }
    console.log(v7)

}

//#
//###
//#####
//#######