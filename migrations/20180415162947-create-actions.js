"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("actions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			personnel_code: {
				type: Sequelize.STRING
			},
			action_type: {
				type: Sequelize.STRING
			},
			reason_for_action: {
				type: Sequelize.STRING
			},
			termination_reason: {
				type: Sequelize.STRING
			},
			employment_status: {
				type: Sequelize.STRING
			},
			from: {
				type: Sequelize.DATE
			},
			to: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("actions");
	}
};
