"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("personal_informations", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			form_of_address: {
				type: Sequelize.STRING
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			last_name: {
				type: Sequelize.STRING
			},
			arabic_full_name: {
				type: Sequelize.STRING
			},
			gender: {
				type: Sequelize.ENUM,
				values: ["male", "female"]
			},
			date_of_birth: {
				type: Sequelize.DATE
			},
			country_of_birth: {
				type: Sequelize.STRING
			},
			nationality: {
				type: Sequelize.STRING
			},
			marital_status: {
				type: Sequelize.STRING
			},
			military_status: {
				type: Sequelize.STRING
			},
			national_id: {
				type: Sequelize.STRING,
				unique: true
			},
			disabled: {
				type: Sequelize.BOOLEAN
			},
			type_of_disability: {
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
		return queryInterface.dropTable("personal_informations");
	}
};
