"use strict";
module.exports = (sequelize, DataTypes) => {
	var Immigration = sequelize.define(
		"immigration",
		{
			passport_name: DataTypes.STRING,
			passport_number: DataTypes.STRING,
			passport_country: DataTypes.STRING,
			passport_issue_place: DataTypes.STRING,
			passport_expiry_date: DataTypes.DATE,
			visa_no: DataTypes.STRING,
			designation: DataTypes.STRING,
			duration_in_years: DataTypes.INTEGER,
			residence_permit_no: DataTypes.STRING,
			sponsor: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Immigration;
};
