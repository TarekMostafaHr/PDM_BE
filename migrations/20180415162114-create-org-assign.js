"use strict";
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable("org_assign", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			company_code: {
				type: Sequelize.STRING
			},
			BU: {
				type: Sequelize.STRING
			},
			division: {
				type: Sequelize.STRING
			},
			department: {
				type: Sequelize.STRING
			},
			title: {
				type: Sequelize.STRING
			},
			personnel_area: {
				type: Sequelize.STRING
			},
			personnel_sub_area: {
				type: Sequelize.STRING
			},
			cost_center: {
				type: Sequelize.STRING
			},
			employee_group: {
				type: Sequelize.STRING
			},
			employee_sub_group: {
				type: Sequelize.STRING
			},
			pay_area: {
				type: Sequelize.STRING
			},
			job_family: {
				type: Sequelize.STRING
			},
			job_sub_family: {
				type: Sequelize.STRING
			},
			position_code: {
				type: Sequelize.STRING
			},
			organization_unit: {
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
		return queryInterface.dropTable("org_assign");
	}
};
