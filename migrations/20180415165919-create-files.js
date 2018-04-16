"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable(
			"files",
			{
				id: {
					allowNull: false,
					autoIncrement: true,
					primaryKey: true,
					type: Sequelize.INTEGER
				},
				picture: {
					type: Sequelize.STRING
				},
				documnet_id: {
					type: Sequelize.STRING
				},
				document_title: {
					type: Sequelize.STRING
				},
				attachment_type: {
					type: Sequelize.STRING
				},
				file: {
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
				underscored: true,
				paranoid: true
			}
		);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("files");
	}
};
