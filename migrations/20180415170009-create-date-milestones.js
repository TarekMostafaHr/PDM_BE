"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"date_milestones",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				date_id: {
					type: Sequelize.STRING
				},
				date_type: {
					type: Sequelize.STRING
				},
				date: {
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
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("date_milestones");
	}
};
