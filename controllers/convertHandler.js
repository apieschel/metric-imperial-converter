function ConvertHandler() {
  
  this.getNum = function(input) {  
    let regexp = /[a-z]/i;
    let result = regexp.exec(input.trim());
    let resultString; 
    
    if(result.index === 0) {
      resultString = 0;
    } else {
      resultString = input.substring(0, result.index);
    }
    return eval(resultString);
  };
  
  this.getUnit = function(input) {
    let regexp = /[a-z]/i;
    let result = regexp.exec(input);
    let resultString = input.substring(result.index,);
    resultString = resultString.toLowerCase();
    switch(resultString) {
      case "mi":
        break;
      case "mile":
        resultString = "mi";
        break;
      case "miles":
        resultString = "mi";
        break;
      case "ki":
        break;
      case "kilometers":
        resultString = "ki";
        break;
      case "kilometer":
        resultString = "ki";
        break;
      case "lb":
        resultString = "lbs";
        break;
      case "lbs":
        break;
      case "pound":
        resultString = "lbs";
        break;
      case "pounds":
        resultString = "lbs";
        break;
      case "kg":
        break;
      case "kilogram":
        resultString = "kg";
        break;
      case "kilograms":
        resultString = "kg";
        break;
      case "gal":
        break;
      case "gallon":
        resultString = "gal";
        break;
      case "gallons":
        resultString = "gal";
        break;
      case "gals": 
        resultString = "gal";
        break;
      case "L":
        break;
      case "l":
        resultString = "L";
        break;
      case "liter":
        resultString = "L";
        break;
      case "liters":
        resultString = "L";
        break;
      default: 
        resultString = "invalid unit";
    }
    return resultString;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit) {
      case "mi":
        result = "ki";
        break;
      case "ki":
        result = "mi";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit) {
      case "mi":
        result = "miles";
        break;
      case "ki":
        result = "kilometers";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit) {
      case "mi":
        result = initNum * miToKm;
        break;
      case "ki":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum.toFixed(5) + " " + initUnit + " converts to " + returnNum.toFixed(5) + " " + returnUnit;
    return result;
  };
  
}

module.exports = ConvertHandler;