"use strict";
module.exports = (sequelize, DataTypes) => {
	var Labor_contract = sequelize.define("labor_contract", {
		contract_type: DataTypes.STRING,
		start_date: DataTypes.DATE,
		end_date: DataTypes.DATE,
		probation_end: DataTypes.DATE,
		from: DataTypes.DATE,
		to: DataTypes.DATE
	});

	Labor_contract.associate = models => {
		Labor_contract.belongsTo(models.user); // user_id will be added to labor_contract
	};

	return Labor_contract;
};
