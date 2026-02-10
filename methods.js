var salaryParameters = [4, 5, 8, 0.22];

function employeeGrossSalaryFun(employeeExtraValue, salary, bonus, penalties) {
  return salary * bonus + employeeExtraValue - penalties;
}
function employeeTaxValueFun(employeeGrossSalary) {
  return employeeGrossSalary * salaryParameters[3];
}
function employeeNetSalaryFun(employeeGrossSalary, employeeTaxValue) {
  return employeeGrossSalary - employeeTaxValue;
}
function employeeHourRateFun(employeeSalary) {
  var totalMonthlyHours =
    salaryParameters[0] * salaryParameters[1] * salaryParameters[2];

  return employeeSalary / totalMonthlyHours;
}
function classifyExtraHourRate(employeesInfoArray) {
  for (let i = 0; i < employeesInfoArray.length; i++) {
    var employeeHourRate = employeeHourRateFun(employeesInfoArray[i].salary);

    if (employeesInfoArray[i].jobTitle == "Operator") {
      var employeeExtraValue = employeeHourRate;
    } else if (employeesInfoArray[i].jobTitle == "Salesman") {
      var employeeExtraValue = employeeHourRate * 1.5;
    } else if (employeesInfoArray[i].jobTitle == "Admin") {
      var employeeExtraValue = employeeHourRate * 2;
    } else {
      var employeeExtraValue = employeeHourRate * 0;
    }

    var employeeGrossSalary = employeeGrossSalaryFun(
      employeeExtraValue,
      employeesInfoArray[i].salary,
      employeesInfoArray[i].bonus,
      employeesInfoArray[i].penalties,
    );

    var employeeTaxValue = employeeTaxValueFun(employeeGrossSalary);

    var employeeNetSalary = employeeNetSalaryFun(
      employeeGrossSalary,
      employeeTaxValue,
    );
    console.log(
      `
    Employee Name:\t\t\t${employeesInfoArray[i].name}
    Employee Job Title:\t\t${employeesInfoArray[i].jobTitle}
    Employee Gross Salary:\t${employeeGrossSalary}
    Employee Taxes:\t\t\t${employeeTaxValue}
    Employee Extra:\t\t\t${employeeExtraValue}
    Employee Net Salary:\t${employeeNetSalary}
    `,
    );
  }
}
