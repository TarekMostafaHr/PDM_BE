"use strict";
module.exports = (sequelize, DataTypes) => {
	var Labor_contract = sequelize.define(
		"labor_contract",
		{
			contract_type: DataTypes.STRING,
			start_date: DataTypes.DATE,
			end_date: DataTypes.DATE,
			probation_end: DataTypes.DATE,
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
	return Labor_contract;
};
