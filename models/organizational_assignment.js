"use strict";
module.exports = (sequelize, DataTypes) => {
	var Organizational_assignment = sequelize.define(
		"organizational_assignment",
		{
			company_code: DataTypes.STRING,
			BU: DataTypes.STRING,
			division: DataTypes.STRING,
			department: DataTypes.STRING,
			title: DataTypes.STRING,
			personnel_area: DataTypes.STRING,
			personnel_sub_area: DataTypes.STRING,
			cost_center: DataTypes.STRING,
			employee_group: DataTypes.STRING,
			employee_sub_group: DataTypes.STRING,
			pay_area: DataTypes.STRING,
			job_family: DataTypes.STRING,
			job_sub_family: DataTypes.STRING,
			position_code: DataTypes.STRING,
			organization_unit: DataTypes.STRING,
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
	return Organizational_assignment;
};
