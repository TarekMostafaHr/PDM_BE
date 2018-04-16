"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"immigrations",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				passport_name: {
					type: Sequelize.STRING
				},
				passport_number: {
					type: Sequelize.STRING
				},
				passport_country: {
					type: Sequelize.STRING
				},
				passport_issue_place: {
					type: Sequelize.STRING
				},
				passport_expiry_date: {
					type: Sequelize.DATE
				},
				visa_no: {
					type: Sequelize.STRING
				},
				designation: {
					type: Sequelize.STRING
				},
				duration_in_years: {
					type: Sequelize.INTEGER
				},
				residence_permit_no: {
					type: Sequelize.STRING
				},
				sponsor: {
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
				tableName: "immigration",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("immigrations");
	}
};
