"use strict";
module.exports = (sequelize, DataTypes) => {
	var Bank_details = sequelize.define(
		"bank_details",
		{
			bank_name: DataTypes.STRING,
			bank_country: DataTypes.STRING,
			branch_name: DataTypes.STRING,
			branch_code: DataTypes.STRING,
			bank_key: DataTypes.STRING,
			account_no: DataTypes.STRING,
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
	return Bank_details;
};
