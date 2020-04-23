console.log('Muhammad Hassan Naeem');
// Q1: Write a program to create basic object structure (Object Name = “Student”)?
var student = {
    Name: 'Ashraf',
    Class: 'X',
    RollNo: '1010'
};
console.log(student);
console.log(student.Class);
console.log(student.Name);
console.log(student.RollNo);
student.city = 'Karachi';
console.log(student);
console.log(student.city);
// Q2: Write a program to create student Object and use properties that are as given 
// •	name = “ABS Student” ;
// •	age = 20;
// •	student_Id = 420 ;

// Show Student Properties in alert box
var student = {
    name: 'ABS Student',
    age: '20',
    student_Id: '420'
}
alert(student.name);
alert(student.age);
alert(student.student_Id);
// Q3: Write a program to create student bio data, following fields use in Student Object 
// (First Name, Last Name, Age, ID, Contact #, Father Name, Residential Address)
var studentBioData = {
    FirstName: 'Khawar Anjum',
    LastName: 'Aftab Gul',
    Age: '15',
    Id: '25014',
    Contact: '03XX-XXXXXX',
    FatherName: 'Iftokhar Ahmed',
    ResidentialAddress: 'Karachi Sindh Pakistan'
}
console.log(studentBioData.FirstName);
console.log(studentBioData.LastName);
console.log(studentBioData.Age);
console.log(studentBioData.Id);
console.log(studentBioData.Contact);
console.log(studentBioData.FatherName);
console.log(studentBioData.ResidentialAddress);
// Q4: Write a program to create student mark sheet, use following fields in Object

// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 80,
// Student_CSS : 90,
// Student_JAVASCRIPT : 90,
// Student_BOOTSTRAP :  70,
// Total_Marks : 400

var markSheet = {
    Student_Name: 'Zia Khan',
    Student_ID: 'J30052425300',
    Subject_HTML: 80,
    Student_CSS: 90,
    Student_JAVASCRIPT: 90,
    Student_BOOTSTRAP: 70,
    Total_Marks: 400

}
document.write('<table border=2px outset><tr><th>' + markSheet.student_Id + '</th><th>' + markSheet.Student_Name + '</th></tr><tr><td>' + markSheet.Subject_HTML + '</td><td>' + markSheet.Student_BOOTSTRAP + '</td></tr><tr><td>' + markSheet.Student_CSS + '</td><td>' + markSheet.Student_JAVASCRIPT + '</td></tr></table>');
// Q5: Write a program to check if student is eligible for Module A class, following fields use in Student Object


// Student_Name :  “Rehan Uddin”,
// Student_Age : 20  Check the Condition 

// If student age is > 20 then not eligible for Module A classes 

var check = {
    StudenT_Name: 'Rehan Uddin',
    Student_Age: 20
}
if (check.Student_Age > 20) {
    console.log('Eligible For Module A Classes');
} else {
    console.log("Not Eligible For Module A Classes");
}
// Q6: Write a program to create two student Mark sheet, and check the conditions as given in question

// Student_One 
// {
// Student_Name : “Zia Khan”,
// Student_ID : =J30052425300,
// Subject_HTML : 80,
// Student_CSS : 90,
// Student_JAVASCRIPT : 90,
// Student_BOOTSTRAP :  70,
// Total_Marks : 400
//  }

//  Student_Two

//  {
//  Student_Name : “Zia Khan”,
//  Student_ID : =J30052425300,
//  Subject_HTML : 60,
//  Student_CSS : 70,
//  Student_JAVASCRIPT : 65,
//  Student_BOOTSTRAP :  85,
//  Total_Marks : 400
//   }

//  Show the percentage for both and check the condition, if Student_One’s percentage > Student_Two then eligible for scholarship 
var student1 = {
    Student_Name: 'Zia Khan',
    Student_ID: 'J30052425300',
    Subject_HTML: 80,
    Student_CSS: 90,
    Student_JAVASCRIPT: 90,
    Student_BOOTSTRAP: 70,
    Total_Marks: 400
}
var student2 = {
    Student_Name: 'Zia Khan',
    Student_ID: 'J30052425300',
    Subject_HTML: 60,
    Student_CSS: 70,
    Student_JAVASCRIPT: 65,
    Student_BOOTSTRAP: 85,
    Total_Marks: 400
}
var ObtStd1 = student1.Subject_HTML + student1.Student_JAVASCRIPT + student1.Student_CSS + student1.Student_BOOTSTRAP;
var obtStd2 = student2.Subject_HTML + student2.Student_JAVASCRIPT + student2.Student_CSS + student2.Student_BOOTSTRAP;
var std1Percentage = ObtStd1 * 100 / student1.Total_Marks;
var std2Percentage = obtStd2 * 100 / student2.Total_Marks
console.log('Student Name: ' + student1.Student_Name);
console.log('Student Id: ' + student1.Student_ID);
console.log('Student Marks In HTML: ' + student1.Subject_HTML);
console.log('Student Marks In CSS: ' + student1.Student_CSS);
console.log('Student Marks In JAVASCRIPT: ' + student1.Student_JAVASCRIPT);
console.log('Student Marks In BOOTSTRAP: ' + student1.Student_BOOTSTRAP);
console.log('Total Marks: ' + student1.Total_Marks);
console.log('Student ' + student1.Student_Name + ' has Obtained: ' + ObtStd1);
console.log('Student ' + student1.Student_Name + ' has Got ' + std1Percentage);
console.log('Student Name: ' + student2.Student_Name);
console.log('Student Id: ' + student2.Student_ID);
console.log('Student Marks In HTML: ' + student2.Subject_HTML);
console.log('Student Marks In CSS: ' + student2.Student_CSS);
console.log('Student Marks In JAVASCRIPT: ' + student2.Student_JAVASCRIPT);
console.log('Student Marks In BOOTSTRAP: ' + student2.Student_BOOTSTRAP);
console.log('Total Marks: ' + student2.Total_Marks);
console.log('Student ' + student2.Student_Name + ' has Obtained: ' + obtStd2);
console.log('Student ' + student2.Student_Name + ' has Got ' + std2Percentage);
if (std1Percentage > std2Percentage) {
    console.log('Congratulations! ' + student1.Student_Name + ' is Eligible For Scholarship...')
} else {
    console.log('Congratulations! ' + student2.Student_Name + ' is Eligible For Scholarship...');
}
// Q7: Write a program to create student object and insert data through prompt, then show values in alert box
// Use following properties in object 

// Name
// Age
// Address

// And after show the data in alert box?
// var student = {
//     Name: prompt("Enter Your Name here"),
//     Age: +prompt("Enter Your correct Age here: "),
//     Address: prompt('Enter your current Address here:')
// }
// console.log(student.Name);
// console.log(student.Age);
// console.log(student.Address);
// Q8: Write a program to take user input and create student mark sheet?

// Student_Name : user input,
// Student_ID : user input,
// Subject_HTML : user input,
// Student_CSS : user input,
// Student_JAVASCRIPT : user input,
// Student_BOOTSTRAP :  user input,
// Total_Marks : user input
var studentAtten = {
    Student_Name: prompt("ENter Your Name here:"),
    Student_ID: +prompt("ENter your ID here: "),
    Subject_HTML: +prompt('Enter Your Number in HTML: '),
    Student_CSS: +prompt('Enter Your Number In CSS: '),
    Student_JAVASCRIPT: +prompt("Enter Your Number In JAVASCRIPT: "),
    Student_BOOTSTRAP: +prompt("Enter Your Number In BootSTRAP: "),
    Total_Marks: +prompt("ENter Your Total Marks: ")
}