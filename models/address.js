"use strict";
module.exports = (sequelize, DataTypes) => {
	const Address = sequelize.define("address", {
		address_primary: DataTypes.STRING,
		address_secondary: DataTypes.STRING,
		postal_code: DataTypes.STRING,
		city: DataTypes.STRING,
		country: DataTypes.STRING,
		personal_email: DataTypes.STRING,
		business_email: DataTypes.STRING,
		personal_cell: DataTypes.STRING,
		emergency_name: DataTypes.STRING,
		relationship: DataTypes.STRING,
		phone: DataTypes.STRING
	});
	return Address;
};
