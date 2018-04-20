"use strict";
module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define("user", {
		user_name: DataTypes.STRING,
		password: DataTypes.STRING,
		type: DataTypes.STRING,
		role: DataTypes.STRING
	});

	User.associate = models => {
		User.belongsTo(models.personal_information, {
			foreign_key: "personal_info_id"
		});
		// User.hasMany(models.org_assign);
	};

	return User;
};
