'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
      const initUnit = convertHandler.getUnit(input);
      const initNum = convertHandler.getNum(input);

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