"use strict";
module.exports = (sequelize, DataTypes) => {
	var Date_milestones = sequelize.define(
		"date_milestones",
		{
			date_id: DataTypes.STRING,
			date_type: DataTypes.STRING,
			date: DataTypes.DATE
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Date_milestones;
};
