"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"annual_awards",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				award_type: {
					type: Sequelize.STRING
				},
				target_bonus: {
					type: Sequelize.STRING
				},
				currency: {
					type: Sequelize.STRING
				},
				percentage: {
					type: Sequelize.STRING
				},
				amount: {
					type: Sequelize.INTEGER
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
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("annual_awards");
	}
};
