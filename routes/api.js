/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
      console.log(input);
      const initNum = convertHandler.getNum(input);
      console.log(initNum);
      const initUnit = convertHandler.getUnit(input);
      console.log(initUnit);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      console.log(returnUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
    });
    
};
