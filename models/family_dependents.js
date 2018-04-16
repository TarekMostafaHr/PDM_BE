"use strict";
module.exports = (sequelize, DataTypes) => {
	var Family_dependents = sequelize.define(
		"family_dependents",
		{
			member_name: DataTypes.STRING,
			relationship: DataTypes.STRING,
			first_name: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Family_dependents;
};
