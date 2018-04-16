"use strict";
module.exports = (sequelize, DataTypes) => {
	var Work_schedule = sequelize.define(
		"work_schedule",
		{
			work_schedule_rule: DataTypes.STRING,
			part_time: DataTypes.BOOLEAN,
			weekly_working_hrs: DataTypes.STRING,
			monthly_working_hrs: DataTypes.STRING,
			shift_based: DataTypes.BOOLEAN,
			from: DataTypes.DATE,
			to: DataTypes.DATE
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Work_schedule;
};
