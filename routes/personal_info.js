var models = require("../models");
var express = require("express");
var router = express.Router();

// get all
router.get("/", function(req, res) {
	models.personal_information.findAndCountAll().then(resp => {
		res.json({ count: resp.count, rows: resp.rows });
	});
});

router.get("/:id", function(req, res) {
	models.personal_information.findById(req.params.id).then(resp => {
		res.json({ resp });
	});
});

router.post("/create", function(req, res) {
	const {
		form_of_address,
		first_name,
		last_name,
		arabic_full_name,
		gender,
		date_of_birth,
		country_of_birth,
		nationality,
		marital_status,
		military_status,
		national_id,
		disabled,
		type_of_disability
	} = req.body;
	console.log(req.body);
	models.personal_information
		.create({
			form_of_address,
			first_name,
			last_name,
			arabic_full_name,
			gender,
			date_of_birth,
			country_of_birth,
			nationality,
			marital_status,
			military_status,
			national_id,
			disabled,
			type_of_disability
		})
		.then(resp => {
			res.json({ resp });
		});
});

module.exports = router;
