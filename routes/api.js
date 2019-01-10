'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
      const initUnit = convertHandler.getUnit(input);
      console.log(initUnit);     
      const initNum = convertHandler.getNum(input);
      console.log(initNum); 

      if(initUnit === "invalid unit" && initNum === "invalid number") {
        res.json("invalid number and unit");
      } else if(initUnit === "invalid unit") {
        res.json(initUnit);
      } else if (initNum === "invalid number") {
        res.json("invalid number");
      } else {
        
          const returnNum = convertHandler.convert(initNum, initUnit);
          const returnUnit = convertHandler.getReturnUnit(initUnit);
          const initSpelled = convertHandler.spellOutUnit(initUnit);
          const returnSpelled = convertHandler.spellOutUnit(returnUnit);
          const toString = convertHandler.getString(initNum, initSpelled, returnNum, returnSpelled);

          console.log(returnNum);
          console.log(returnUnit);
          console.log(toString);

          res.json({
            initNum: initNum,
            initUnit: initUnit,
            returnNum: returnNum,
            returnUnit: returnUnit,
            string: toString
          });
        }
      
    });
};