// 1.Write a program that take two numbers & add them in a new
// variable. Show the result in your console.
// var num1 = +prompt("Enter your First Number To be Sum Up: ");
// var num2 = +prompt("Enter your Second Number To be Sum Up: ");
// var sum = num1 + num2;
// console.log('Sum Of ' + num1 + ' & ' + num2 + ' is: ' + sum);
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus. E.g.
// var num1 = +prompt("Enter Your First Number To be Subtracted: ");
// var num2 = +prompt('Enter Your Second Number To Be Subtracted: ');
// var subtraction = num1 - num2;
// console.log('Subtraction Of ' + num1 + ' & ' + num2 + ' is: ' + subtraction);
// var num1 = +prompt("Enter Your First Number To be Multiplied: ");
// var num2 = +prompt('Enter Your Second Number To Be Multiplied: ');
// var multiplication = num1 * num2;
// console.log('Multiplication Of ' + num1 + ' & ' + num2 + ' is: ' + multiplication);
// var num1 = +prompt("Enter Your First Number To be Divided: ");
// var num2 = +prompt('Enter Your Second Number To Be Divided: ');
// var division = num1 / num2;
// console.log('Division Of ' + num1 + ' & ' + num2 + ' is: ' + division);
// var num1 = +prompt("Enter Your First Number To get Remainder through Modulus: ");
// var num2 = +prompt('Enter Your Second Number To get Remainder through Modulus: ');
// var modulus = num1 % num2;
// console.log('Remainder Of ' + num1 + ' & ' + num2 + ' is: ' + modulus);
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after
// variable declaration is: ??”. MATH EXPRESSIONS
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value:
// 3”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after
// increment is: 4”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after
// addition is: 11”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after
// decrement is: 10”.
// k. Show the remainder after dividing the variable’s value by 3.
// Output : “The remainder is : 1”
// var complex;
// console.log('Value after declaration is: ' + complex);
// complex = 7;
// console.log('Initial Value is: ' + complex);
// complex++;
// console.log("Value after Increment is: " + complex);
// complex = complex + 7;
// console.log("Value after addition is: " + complex);
// complex--;
// console.log("Value after Decrement is: " + complex);
// complex = complex % 3;
// console.log('The Remainder Is: ' + complex);
// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to
// a movie. Example output:
// var costOfTicket = 600;
// var buyTicket = 5 * costOfTicket;
// document.write("Total Cost to buy 5 Tickets are: " + buyTicket + " PKR.");
// console.log("Total Cost to buy 5 Tickets are: " + buyTicket + " PKR.");
// 5. Write a script to display multiplication table of any number in
// your browser. E.g
// var number = 5;
// var num = 1;
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// console.log(number + ' * ' + num + ' = ' + number * num++);
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:
// var temCelcius = 37;
// var Fahrenheit = (temCelcius * 9 / 5) + 32;
// console.log("NNoC is NNoF: " + Fahrenheit);
// var temFarhenheit = 99;
// var Celsius = (temFarhenheit - 32) * 5 / 9;
// console.log('NNoF is NNoC: ' + Celsius);
// 7. Write a program to implement checkout process of a shopping
// cart system for an e-commerce website. Store the following in
// variables a. Price of item 1 b. Price of item 2 c. Ordered quantity of
// item 1 d. Ordered Quantity of item 2 e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// var priceOf1Item = +prompt("Enter The Price Of 1 Items: ");
// var priceOf2Item = +prompt("Enter The Price Of 2 Items: ");
// var quantityOf1Item = +prompt('Enter The Quantity Of 1 Item You Purchased: ');
// var quantityOf2Item = +prompt('Enter The Quantity Of 2 Item You Purchased: ');
// var ShippingCharges = 150;
// priceOf1Item = priceOf1Item * quantityOf1Item;
// priceOf2Item = priceOf2Item * quantityOf2Item;
// console.log('The First Item Price: ' + priceOf1Item + '\nThe Second Item Price: ' + priceOf2Item + '\nThe Quantity Of 1 Item is: ' + quantityOf1Item + '\nThe Quantity Of 2 Item is: ' + quantityOf2Item + '\nShipping Charges/ Flat Charges: ' + ShippingCharges + '\nThe Total Bill is: ', priceOf2Item + priceOf1Item + ShippingCharges);
// 8. Write a script to take total marks & marks obtained by a
// student.Compute the percentage & show the result in your
// browser.
// var obtMarks = +prompt("Enter your Obtained Marks Here: ");
// var TotalMarks = +prompt('Enter The Total Marks Here: ');
// var percentage = obtMarks / TotalMarks * 100;
// console.log("Your Percentage is: " + percentage);
// 9. Assume we have 10 US dollars & 25 Saudi Riyals.
// Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 160 Pakistani Rupee and 1 Saudi
// Riyal = 43Pakistani Rupee)
// var Dollar = 10;
// var SaudiRiyals = 25;
// // console.log("The Total Currency We have by converting the $" + Dollar + 'US Dollar and ' + SaudiRiyals + ' Saudi Riyals To PAkistani Currency Is: ', Dollar * 160 + SaudiRiyals * 43 + 'PKR.');
// 10. Write a program to initialize a variable with some number and
// do arithmetic in the following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.
// var number = 7;
// console.log(number + 5 * 10 / 2);
// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN
// years old”
// var birthDayyear = 2000;
// var curentYear = 2020;
// console.log("They Are Either ", curentYear - birthDayyear-- + ' or', curentYear - birthDayyear + ' Years Old.');
// document.write("They Are Either ", curentYear - birthDayyear-- + ' or', curentYear - birthDayyear + ' Years Old.');
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output
// “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// c. Calculate the area based on the radius, and output “The area is
// NN”.
// (Hint : Area of a circle = π r2, π = 3.142)
// var radius = +prompt("Enter The Radius OF A CIRCLE: ");
// var PI = 3.142;
// var circumference = 2 * PI * radius;
// console.log("The Circumference Of a Circle is: " + circumference);
// document.write("The Circumference Of a Circle is: " + circumference);
// var area = PI * Math.pow(radius, 2);
// console.log("Area Of A Circle is: " + area);
// document.write("Area Of A Circle is: " + area);
// 14. What will be the output in variables a, b & result after
// execution of the following script: var a = 2, b = 1; var result = --a -
// --b + ++b + b--;
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result); // 3
// 15. The Lifetime Supply Calculator: Ever wonder how much a
// “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to
// last you until the ripe old age of NN”.
// var favSnacks = 'Kurkure';
// var currentAge = 20;
// var maximumAge = 70;
// var amountPerDay = 20;
// console.log("You will need ", maximumAge * amountPerDay + currentAge * amountPerDay + ' ' + favSnacks + ' to last you untill your riped old age of ' + maximumAge);
// document.write("You will need ", maximumAge * amountPerDay + currentAge * amountPerDay + ' ' + favSnacks + ' to last you untill your riped old age of ' + maximumAge);