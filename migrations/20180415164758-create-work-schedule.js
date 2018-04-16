"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"work_schedules",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				work_schedule_rule: {
					type: Sequelize.STRING
				},
				part_time: {
					type: Sequelize.BOOLEAN
				},
				weekly_working_hrs: {
					type: Sequelize.STRING
				},
				monthly_working_hrs: {
					type: Sequelize.STRING
				},
				shift_based: {
					type: Sequelize.BOOLEAN
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
			},
			{
				tableName: "work_schedule",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("work_schedules");
	}
};
