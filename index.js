const employee = {
    name: "Yves",
    streetAddress: "SauntL",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {
         [key]: value });
  }
  
  const destructivelyUpdateEmployeeWithKeyAndValue = function(employee, key, value) {
    employee[key] = value;
  
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const copyOfDriver = Object.assign({}, employee);
  
    delete copyOfDriver[key];
  
    return copyOfDriver;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
  
    return employee;
  }