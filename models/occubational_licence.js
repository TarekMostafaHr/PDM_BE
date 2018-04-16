"use strict";
module.exports = (sequelize, DataTypes) => {
	var Occubational_licence = sequelize.define(
		"occubational_licence",
		{
			license_type: DataTypes.STRING,
			license_name: DataTypes.STRING,
			issue_date: DataTypes.DATE,
			expiry_date: DataTypes.DATE,
			issue_inistitue: DataTypes.STRING,
			entity_country: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Occubational_licence;
};
