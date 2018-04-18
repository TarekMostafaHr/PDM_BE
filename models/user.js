"use strict";
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define(
		"user",
		{
			user_name: DataTypes.STRING,
			password: DataTypes.STRING,
			type: DataTypes.STRING,
			role: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return User;
};
