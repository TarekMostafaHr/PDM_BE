"use strict";
module.exports = (sequelize, DataTypes) => {
	var Personal_information = sequelize.define("personal_information", {
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
			type: DataTypes.STRING
		},
		disabled: DataTypes.BOOLEAN,
		type_of_disability: DataTypes.STRING
	});

	// Personal_information.associate = models => {
	// 	Personal_information.hasOne(models.user);
	// };

	return Personal_information;
};
