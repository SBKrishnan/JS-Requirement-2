
// Employee List

const employeeList = [
    {id : 1,name : 'Robin',department : 'HR',salary : 80000,bonusPercentage : 0.1,yoe:5},
    {id : 2,name : 'Subash',department : 'Engineering',salary : 50000, bonusPercentage : 0.15,yoe:4},
    {id : 3,name : 'prasenna',department : 'sales',salary : 90000, bonusPercentage : 0.5,yoe:3},
    {id : 3,name : 'prasenna',department : 'sales',salary : 90000, bonusPercentage : 0.5,yoe:3}

] 


// Remove Duplicate

function removeDuplictes(){

    const uniqueId = new Set();
    const uniqueEmployees = [];
    for (const element of employeeList) {
        if(!uniqueId.has(element.id)){
            uniqueId.add(element.id);
            uniqueEmployees.push(element)
        }
        
    }
    return uniqueEmployees
}

const uniqueEmployees = removeDuplictes()
console.log(uniqueEmployees);

// Filter Employees by Department
const department = 'HR'
function filteredEmployees (){
    return employeeList.filter(cus => department === cus.department)
}
// console.log(filteredEmployees());

// Compensation

function calcompansation(){
    for (const element of uniqueEmployees) {
        
    
    if(element.department === 'HR'){
        if(element.salary<50000)
        {
            element.bonus = element.salary*0.10
        }
        else{
            element.bonus = element.salary
        }
    }
    else if (element.department === 'Engineering') {
        if (element.yoe > 2) {
            element.bonus = element.salary*0.15
        } else {
            element.bonus = element.salary
        }
    }
    else if (element.department === 'sales') {
        if (element.salary < 100000) {
            element.bonus = element.salary*0.05
        }
        else if (element.salary > 100000 && element.salary < 500000) {
            element.bonus = element.salary*0.10
        } else if (element > 500000){
            element.bonus = element.salary*0.20
        }
    } else {
        element.bonus = element.salary
    }

    const com = [
        {salary : element.salary,bonus : element.bonus,compansation: element.compansation}
    ]

    
    
}

}

 calcompansation();

// Generate Report 

function generateReport(){
    
        // const depart = uniqueEmployees.department
    for (const element of uniqueEmployees) {
         const filtered = uniqueEmployees.filter(cus => uniqueEmployees.department)
            
        const report = [
            
            element.department,
            {name : element.name,department : element.department,compansation : calcompansation()
            }
        ]
        console.log(report);
        

        
    }
}


generateReport();