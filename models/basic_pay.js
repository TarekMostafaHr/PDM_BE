'use strict';
module.exports = (sequelize, DataTypes) => {
  var basic_pay = sequelize.define('basic_pay', {
    reason: DataTypes.STRING,
    grade: DataTypes.STRING,
    pay_period: DataTypes.STRING,
    monthly_salary: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    currency: DataTypes.STRING,
    from: DataTypes.DATE,
    to: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return basic_pay;
};