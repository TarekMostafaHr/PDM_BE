"use strict";
module.exports = (sequelize, DataTypes) => {
	const Actions = sequelize.define("actions", {
		personnel_code: DataTypes.STRING,
		action_type: DataTypes.STRING,
		reason_for_action: DataTypes.STRING,
		termination_reason: DataTypes.STRING,
		employment_status: DataTypes.STRING,
		from: DataTypes.DATE,
		to: DataTypes.DATE
	});

	Actions.associations = models => {
		Actions.belongsTo(models.user, { foreignKey: "emp_id" });
	};
	return Actions;
};
