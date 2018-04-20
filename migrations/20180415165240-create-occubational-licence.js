"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("occubational_licences", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			license_type: {
				type: Sequelize.STRING
			},
			license_name: {
				type: Sequelize.STRING
			},
			issue_date: {
				type: Sequelize.DATE
			},
			expiry_date: {
				type: Sequelize.DATE
			},
			issue_inistitue: {
				type: Sequelize.STRING
			},
			entity_country: {
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
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("occubational_licences");
	}
};
