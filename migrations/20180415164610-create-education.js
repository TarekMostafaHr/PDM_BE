"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"education",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				university: {
					type: Sequelize.STRING
				},
				faculty: {
					type: Sequelize.STRING
				},
				country: {
					type: Sequelize.STRING
				},
				education_level: {
					type: Sequelize.STRING
				},
				major: {
					type: Sequelize.STRING
				},
				graduation_year: {
					type: Sequelize.STRING
				},
				masters: {
					type: Sequelize.BOOLEAN
				},
				phd: {
					type: Sequelize.BOOLEAN
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
				tableName: "education",
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("education");
	}
};
