const PI = 3.14159;
let radius = 3;

let area = PI * radius * radius;
console.log("The area of a circle with radius " + radius + " is " + area);

radius = 20;
area = PI * radius * radius;
console.log("The area of a circle with radius " + radius + " is " + area);


const one = 1;
const two = '2';
                    
let sum = one * two
console.log("The sum of one and two is: " + sum);

result = one + Number(two); 
console.log("The correct sum of one and two is: " + result);


let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    