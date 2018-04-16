"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"previous_employers",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				employer: {
					type: Sequelize.STRING
				},
				start_date: {
					type: Sequelize.DATE
				},
				end_date: {
					type: Sequelize.DATE
				},
				country: {
					type: Sequelize.STRING
				},
				job_title: {
					type: Sequelize.STRING
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
				tableName: "previous_employer",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("previous_employers");
	}
};
