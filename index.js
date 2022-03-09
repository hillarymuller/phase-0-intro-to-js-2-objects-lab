const employee = {
    name: "Hillary",
    streetAddress: "2015 Bellefontaine Street"
};
function updateEmployeeWithKeyAndValue(employee, streetAddress, Broadway){
    return{
        ...employee,
        [streetAddress]: "11 Broadway",
    };
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, twelveBroadway){
    employee[streetAddress] = "12 Broadway";
    return employee;
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = { ...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}
