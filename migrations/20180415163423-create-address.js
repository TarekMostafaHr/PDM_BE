"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"addresses",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				address_primary: {
					type: Sequelize.STRING
				},
				address_secondary: {
					type: Sequelize.STRING
				},
				postal_code: {
					type: Sequelize.STRING
				},
				city: {
					type: Sequelize.STRING
				},
				country: {
					type: Sequelize.STRING
				},
				personal_email: {
					type: Sequelize.STRING
				},
				business_email: {
					type: Sequelize.STRING
				},
				personal_cell: {
					type: Sequelize.STRING
				},
				emergency_name: {
					type: Sequelize.STRING
				},
				relationship: {
					type: Sequelize.STRING
				},
				phone: {
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
				tableName: "address",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("addresses");
	}
};
