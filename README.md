# JS-Requirement-2

1. Initialize Data:
   - Employee List: Create a list of employees with duplicates. Each employee object should include:
       - id: Aunique identifier for the employee.
       -  name:Nameoftheemployee.
       -  department: Department to which the employee belongs.
       -  salary: Base salary of the employee (in rupees).
       -  bonusPercentage: The percentage of salary to be given as a bonus.
   - Department Bonus Criteria: Define bonus rules for each department:
       - HR:10%additional bonus if salary is below ₹50,000.
       - Engineering: 15% bonus for employees with more than 2 years in the company (optional: yearsOfExperience).
       - Sales: Bonus based on sales targets:
           - Sales below ₹1,00,000: 5%.
           - Sales between ₹1,00,000 and ₹5,00,000: 10%.
           - Sales above ₹5,00,000: 20%.
2. Functionality:
     - RemoveDuplicates: Use a Set to eliminate duplicate entries from the employee list based on the id.
     - Filter Employees by Department: Take a department name as input and return a filtered list of employees belonging to that department.
     - Calculate Total Compensation: For each employee, calculate:
         - Basesalary.
         - Bonusbased on the department rules.
         - Total compensation (salary + bonus).
     - Generate Report: For the filtered employees:
         - Include the name, department, salary, bonus, and total compensation.
         - Groupthe employees by department in the output.
     - UpdateEmployee Details: Update each employee object with their computed bonus and total compensation.
3. Technical Requirements:
     - Usemapandfilter for processing arrays.
     - UseaSettoremove duplicates.
     - Useswitch or if...else for conditional bonus calculation.
     - Utilise for...of or for...in loops for iterating through employee lists or departments.
     - Apply appropriate operators (+=, *=, etc.) for bonus and total compensation calculations.
4. Output: The function should return:
     A summary report grouped by department: { HR: [ { name: 'Alice', salary: 40000, bonus: 4000, totalCompensation: 44000 }, ... ],
