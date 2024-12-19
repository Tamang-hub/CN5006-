/*First Exercise*/
function EmployeeInfo(name,salary){
    console.log("welcome"+name+"salary:"+salary);
    }
    EmployeeInfo("Rachana",2000)
    
/*Second Exercise*/
        const Empskills= (skills)=>{
        console.log('skills:'+ skills);
    }
    Empskills("Python")
    Empskills("Java")
    Empskills("JavaScript")

/*third Exercise*/
    const studentInfo= require("./Studentinfo") 
    const person = require("./Person")  
// because getName is the function so we use () 
    console.log("Student Name:" +studentInfo.getName())  
    console.log(studentInfo.Location())  
    console.log(studentInfo.dob)  
// because dob is a variable so we dont  use () 
console.log(studentInfo.Studentgrade()) 
console.log("grade is "+studentInfo.Studentgrade(40) ) 
// creating new Person
const Person1 = new person("rachana",18,"tamangdorem12@gmail.com")
console.log("using person module",Person1.getPersonInfo())
console.log("program finished")


