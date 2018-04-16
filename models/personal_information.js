"use strict";
module.exports = (sequelize, DataTypes) => {
	var Personal_information = sequelize.define(
		"personal_information",
		{
			form_of_address: DataTypes.STRING,
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			arabic_full_name: DataTypes.STRING,
			gender: DataTypes.ENUM("male", "female"),
			date_of_birth: DataTypes.DATE,
			country_of_birth: DataTypes.STRING,
			nationality: DataTypes.STRING,
			marital_status: DataTypes.STRING,
			military_status: DataTypes.STRING,
			national_id: {
				type: DataTypes.INTEGER,
				validate: {
					isNumeric: true,
					isLength: { min: 14, max: 14 }
				}
			},
			disabled: DataTypes.BOOLEAN,
			type_of_disability: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Personal_information;
};
