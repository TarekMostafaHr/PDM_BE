var models = require("../models");
var express = require("express");
var router = express.Router();

// get all
router.get("/", function(req, res) {
	models.org_assign.findAndCountAll().then(resp => {
		// console.log(models);
		res.json({ count: resp.count, rows: resp.rows });
	});
});

// get one
router.get("/:id", function(req, res) {
	models.org_assign.findById(req.params.id).then(resp => {
		res.json({ resp });
	});
});

router.post("/create", function(req, res) {
	const {
		company_code,
		BU,
		division,
		department,
		title,
		personnel_area,
		personnel_sub_area,
		cost_center,
		employee_group,
		employee_sub_group,
		pay_area,
		job_family,
		job_sub_family,
		position_code,
		organization_unit,
		from,
		to
	} = req.body;
	console.log(req.body);
	models.org_assign
		.create({
			company_code,
			BU,
			division,
			department,
			title,
			personnel_area,
			personnel_sub_area,
			cost_center,
			employee_group,
			employee_sub_group,
			pay_area,
			job_family,
			job_sub_family,
			position_code,
			organization_unit,
			from,
			to
		})
		.then(resp => {
			res.json({ resp });
		});
});

module.exports = router;
