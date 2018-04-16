"use strict";
module.exports = (sequelize, DataTypes) => {
	var Allowances = sequelize.define(
		"allowances",
		{
			wage_type: DataTypes.STRING,
			amount: DataTypes.INTEGER,
			currency: DataTypes.STRING,
			from: DataTypes.DATE,
			to: DataTypes.DATE
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Allowances;
};
