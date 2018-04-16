"use strict";
module.exports = (sequelize, DataTypes) => {
	var Annual_awards = sequelize.define(
		"annual_awards",
		{
			award_type: DataTypes.STRING,
			target_bonus: DataTypes.STRING,
			currency: DataTypes.STRING,
			percentage: DataTypes.STRING,
			amount: DataTypes.INTEGER,
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
	return Annual_awards;
};
