"use strict";
module.exports = (sequelize, DataTypes) => {
	var Previous_employer = sequelize.define(
		"previous_employer",
		{
			employer: DataTypes.STRING,
			start_date: DataTypes.DATE,
			end_date: DataTypes.DATE,
			country: DataTypes.STRING,
			job_title: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Previous_employer;
};
