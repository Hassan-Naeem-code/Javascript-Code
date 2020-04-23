console.log('Muhammad Hassan Naeem');
// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
// var age = +prompt('Enter your Age Here:');
// switch (true) {
//     case (age > 18):
//         console.log('Old Enough');
//         break;
//     case (age < 18):
//         console.log('Too Young');
//         break;
//     default:
//         console.log('Duffer');
// }
// 2. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.
// var divisible = +prompt('Enter a number to check whether it is divisible by 3 or not:');
// switch (true) {
//     case (divisible % 3 === 0):
//         console.log('Number you entered is divisible by 3');
//         break;
//     case (divisible % 3 !== 0):
//         console.log('Number is not divisible by 3');
//         break;
//     default:
//         console.log('Dufer please enter a value(Number).');
// }
// 3. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)
// var number = +prompt('Enter First Number For the Calculation:');
// var number1 = +prompt('Enter Second Number For the Calculation:');
// var operator = prompt('Enter a Operator here:');
// switch (operator) {
//     case '+':
//         console.log('Addition: ', number + number1);
//         break;
//     case '-':
//         console.log('Subtraction: ', number - number1);
//         break;
//     case '*':
//         console.log('Multiplication: ', number * number1);
//         break;
//     case '/':
//         console.log('Division: ', number / number1);
//         break;
//     case '%':
//         console.log('Modulus: ', number % number1);
//         break;
//     default:
//         console.log('No use duffer');
// }
// 4. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 …).
// Use the weekday number to calculate weekday name.



// 5. The getDay() method returns the weekday as a number
// between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ...).
// If today is neither Saturday (6) nor Sunday (0), write a default
// message:






// 6. Given the following script
// function checkCar() {
//     var text;
//     var favCar = prompt("What is your favoritecar?");
//     switch (favCar) {
//         //Add code here
//         case 'BMW':
//             text = 'German car';
//             break;
//         case 'Ford':
//             text = 'American car';
//             break;
//         case 'Peugeot':
//             text = 'French car';
//             break;
//         default:
//             text = 'Unknown Car name';
//     }
//     document.write(text);
// }
// checkCar();
// Finish the switch statement. Add the following
// cases: BMW, Ford and Peugeot.
// Set the value of the variable text to: "German car" for BMW.
// "American car" for Ford. "French car" for Peugeot.
// Also add a default case where the text value is "Unknown car
// name".
// 7. Fix the following switch statement:
// function checkFruit() {
//     var text;
//     var fruits = prompt("Enter a fruit name");
//     switch (fruits) {
//         case "Banana":
//             text = "Banana is good!";
//             break;
//         case "Orange":
//             text = "I am not a fan of orange.";
//             break;
//         case "Apple":
//             text = "How you like them apples?";
//             break;
//         default:
//             text = "I have never heard of that fruit.";
//     }
//     document.write(text);
// }
// checkFruit();
// 8. Write a function that displays the marks range against a
// particular grade. For example, if grade is “B”, then print Marks [
// >= 60 and <70 ]
// var grade = prompt("Enter Your Grade Here:");
// switch (grade) {
//     case 'A+':
//         console.log('Your Marks Ranges From >=80 and <90');
//         break;
//     case 'A':
//         console.log('Your Marks Ranges From >=70 and <80');
//         break;
//     case 'B':
//         console.log('Your Marks Ranges From >=60 and <70');
//         break;
//     case 'C':
//         console.log('Your Marks Ranges From >=50 and <50');
//         break;
//     case 'D':
//         console.log('Your Marks Ranges From >=40 and <50');
//         break;
//     case 'E':
//         console.log('Your Marks Ranges From >=30 and <40! FAIL...');
//         break;
//     case 'F':
//         console.log('Your Marks Ranges From >=20 and <30! FAIL....');
//         break;
//     default:
//         console.log('Such A Duffer Not a Value');
// }
// 9. Use a switch statement to rewrite the following JavaScript
// code. Prompt the user for the number of a month rather than
// setting it to 8:
// var month = +prompt("Enter The Month Which Is Going On In numeric Form: ");
// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('Feburary');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     case 4:
//         console.log('April');
//         break;
//     case 5:
//         console.log('May');
//         break;
//     case 6:
//         console.log('June');
//         break;
//     case 7:
//         console.log('July');
//         break;
//     case 8:
//         console.log('August');
//         break;
//     case 9:
//         console.log('Spetember');
//         break;
//     case 10:
//         console.log('October');
//         break;
//     case 11:
//         console.log('November');
//         break;
//     case 12:
//         console.log('December');
//         break;
//     default:
//         console.log('Such a Duffer dont know the correct month number wise');
// }
// 10. Use a conditional (ternary) operator for this exercise:
// If the variable age is a value below 18, the value of the variable
// voteable should be "Too young",
// otherwise the value of voteable should be "Old enough".
// var age = +prompt("Enter Your Age Here:");
// var result = (age >= 18) ? 'Old Enough' : 'Too Young';
// console.log(result);
// 11. Write a program to display the message “Hello World” 5
// times in your browser.
// for (var i = 1; i <= 5; i++) {
//     console.log("HELLO WORLD: " + i);
// }
// 12. Write a program to print numeric counting from 1 to 10.
// for (var j = 1; j <= 10; j++) {
//     console.log('Counting: ' + j);
// }
// 13. Write a program to print multiplication table of any number
// using. Table number & length should be taken as an input from
// user.
// var tableNumber = +prompt('Enter The Number for which you wanted the Table: ');
// var iteration = +prompt('How many number of Iteration you want:');
// for (var k = 1; k <= iteration; k++) {
//     console.log(tableNumber + ' * ' + k + ' = ' + tableNumber * k);
// }
// 14. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line.
var smartphone = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
for (var l = 0; l < smartphone.length; l++) {
    console.log(smartphone[l]);
    document.write(smartphone[l]);
    document.write('<br/>');
}
// 15. Write a program to print items of the following array:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
var fruits = ['Appe', 'Banana', 'Mango', 'Orange', 'Strawberry'];
for (var m = 0; m < fruits.length; m++) {
    console.log(fruits[m]);
    document.write(fruits[m]);
    document.write('<br/>');
}
for (var n = 0; n < fruits.length; n++) {
    document.write('Element At Index ' + n + ' is ' + fruits[n]);
    document.write('<br/>');
}
// 16. Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.
// var items = +prompt('How many items you want to enter in the Array: ');
// var itemsArray = [];
// var answer;
// for (var o = 0; o <= items; o++) {
//     answer = prompt('Enter the Item name at Index ' + o + ' : ');
//     itemsArray.push(answer);
// }
// document.write('Number of Items ' + itemsArray.length);
// document.write('<br/>');
// document.write('Items:');
// document.write('<br/>');
// for (var p = 0; p < itemsArray.length; p++) {
//     document.write(itemsArray[p]);
//     document.write('<br/>');
// }
// 17. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write('Counting: ');
for (var q = 1; q <= 15; q++) {
    document.write(q + ' , ');
}
document.write('<br/>');
document.write('<br/>');
document.write('Reverse Counting: ');
for (var r = 10; r >= 1; r--) {
    document.write(r + ' , ');
}
document.write('<br/>');
document.write('<br/>');
document.write('Even: ');
for (var s = 0; s <= 20; s++) {
    if (s % 2 == 0) {
        document.write(s + ' , ');
    }
}
document.write('<br/>');
document.write('<br/>');
document.write('ODD: ');
for (var t = 1; t <= 20; t++) {
    if (t % 2 !== 0) {
        document.write(t + ' , ');
    }
}
document.write('<br/>');
document.write('<br/>');
document.write('Series: ');
for (var u = 1; u <= 20; u++) {
    if (u % 2 == 0) {
        document.write(u + 'k , ');
    }
}
// 18. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var bakeryItems = ['Cake', 'Apple Pie', 'Cookie', 'Chips', 'Patties'];
// var userOrder = prompt('Welcome to KHAN BAKERS & FOODZ. What do you want to order Sir/Maam: ');
// var selection = bakeryItems.indexOf(userOrder);
// if (selection !== -1) {
//     alert(userOrder + ' is availabe at index ' + selection + ' in our bakery.');
//     document.write(userOrder + ' is available at index ' + selection + ' in our bakery.');
// } else {
//     alert('We are Sorry ' + userOrder + ' is not available in our bakery.');
//     document.write('We are Sorry ' + userOrder + ' is not available in out Bakery.');
// }
// 19. You have given the following arrays:
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your
// browser using JS.
document.write('<table border=2px outset><tr><th>Students</th><th>Scores</th></tr><tr><td>' + students[0] + '</td><td>' + scores[0] + '</td></tr><tr><td>' + students[1] + '</td><td>' + scores[1] + '</td></tr><tr><td>' + students[2] + '</td><td>' + screen[2] + '</td></tr><tr><td>' + students[3] + '</td><td>' + scores[3] + '</td></tr></table>');
// 20. Write a program that prints number from start of the array
// to desired stop value. Given array:
var scoresOf = [12, 45, 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34
// var input = +prompt('Please eneter a value to stop the array from printing: ');
// scoresOf.push(input);
// for (var w = 0; w < scoresOf.length; w++) {
//     console.log(scoresOf[w] + ' , ');
//     document.write(scoresOf[w] + ' , ');
// }
// 21. You have an array
var A = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    // Write each element on new line with the help of nested loops.
for (var x = 0; x < 1; x++) {
    for (var y = 0; y < 3; y++) {
        console.log(A[y]);
        document.write(A[y]);
        document.write("<br/>");
    }
}
// 22. Write a program to repeatedly print the value of the variable
// num which is input by user. Value should be decreasing by 0.5
// each time, as long as x Value remains positive.
// var UserInput = +prompt('Enter a Number here: ');
// var floatNum = parseFloat(UserInput);
// for (var z = floatNum; z > 0; z--) {
//     var answer = z - 0.5;
//     if (answer !== 0) {
//         console.log(answer + ' , ');
//         document.write(answer + ' , ');
//     }
// }
// 23. The even/odd reporter
// Write a loop that will iterate from 0 to 20. For each iteration, it
// will check if the current number is even or odd, and report that
// to the screen (e.g. "2 is even").
for (var a = 0; a <= 20; a++) {
    if (a % 2 == 0) {
        document.write(a + ' is Even');
        document.write('<br/>');
        console.log(a + ' is Even');
    }
}
// 24. Write a program to calculate the product of the odd integers
// from 1 to 7.
var c = 1;
for (var b = 0; b <= 7; b++) {
    if (b % 2 !== 0) {
        c = c * b;
    }
}
console.log(c);

// 25. Write a program that will write out a wedge of stars. The user
// will enter the initial number of stars, and the program will write
// out lines of stars where each line has one few star than the
// previous line. Initial number of stars: 7
// *******
// ******
// *****
// ****
// ***
// **
// *

for (var b = 0; b < 7; b++) {
    for (var c = 7; c > b; c--) {
        document.write('*');
    }
    document.write('<br/>');
}
// / 20. Write a program to create the following patterns in your
// browser. Take number of lines as an input.
// a. *****
//    *****
//    *****
//    *****
document.write('<hr>');
for (var d = 0; d < 5; d++) {
    for (var e = 0; e < 5; e++) {
        document.write('*');
    }
    document.write('<br/>');
}
// b. *
//    **
//    ***
//    ****
//    *****
document.write('<hr>');
for (var f = 0; f <= 5; f++) {
    for (var g = 0; g < f; g++) {
        document.write('*');
    }
    document.write('<br/>');
}
// c. *****
//    ****
//    ***
//    **
//    *
document.write('<hr>');
for (var h = 0; h <= 5; h++) {
    for (var aa = 5; aa > h; aa--) {
        document.write('*');
    }
    document.write('<br/>');
}