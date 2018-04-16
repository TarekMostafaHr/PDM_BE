"use strict";
module.exports = (sequelize, DataTypes) => {
	var Files = sequelize.define(
		"files",
		{
			picture: DataTypes.STRING,
			documnet_id: DataTypes.STRING,
			document_title: DataTypes.STRING,
			attachment_type: DataTypes.STRING,
			file: DataTypes.STRING
		},
		{
			classMethods: {
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	);
	return Files;
};
