"use strict";
module.exports = (sequelize, DataTypes) => {
	var Education = sequelize.define(
		"education",
		{
			university: DataTypes.STRING,
			faculty: DataTypes.STRING,
			country: DataTypes.STRING,
			education_level: DataTypes.STRING,
			major: DataTypes.STRING,
			graduation_year: DataTypes.STRING,
			masters: DataTypes.BOOLEAN,
			phd: DataTypes.BOOLEAN
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Education;
};
