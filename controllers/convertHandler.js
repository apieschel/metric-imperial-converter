function ConvertHandler() {
  
  this.getNum = function(input) {  
    let regexp = /[a-z]/i;
    let result = regexp.exec(input);
    let resultString = input.substring(0, result.index);
    return resultString.trim();
  };
  
  this.getUnit = function(input) {
    let regexp = /[a-z]/i;
    let result = regexp.exec(input);
    let resultString = input.substring(result.index,);
    resultString = resultString.toLowerCase();
    return resultString;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
      case "mi":
        result = "ki"
        break;
      case "lbs":
        result = "kg"
      case "gal":
        result = "l"
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;