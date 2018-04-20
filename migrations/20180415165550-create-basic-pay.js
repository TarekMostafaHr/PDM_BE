"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("basic_pay", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			reason: {
				type: Sequelize.STRING
			},
			grade: {
				type: Sequelize.STRING
			},
			pay_period: {
				type: Sequelize.STRING
			},
			monthly_salary: {
				type: Sequelize.INTEGER
			},
			amount: {
				type: Sequelize.INTEGER
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
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable("basic_pay");
	}
};
