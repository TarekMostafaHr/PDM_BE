"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"bank_details",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				bank_name: {
					type: Sequelize.STRING
				},
				bank_country: {
					type: Sequelize.STRING
				},
				branch_name: {
					type: Sequelize.STRING
				},
				branch_code: {
					type: Sequelize.STRING
				},
				bank_key: {
					type: Sequelize.STRING
				},
				account_no: {
					type: Sequelize.STRING
				},
				currency: {
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
			},
			{
				tableName: "bank_details",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("bank_details");
	}
};
