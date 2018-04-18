var models = require("../models");
var express = require("express");
var router = express.Router();

// get all
router.get("/", function(req, res) {
	models.actions.findAndCountAll().then(resp => {
		res.json({ count: resp.count, rows: resp.rows });
	});
});

// get one
router.get("/:id", function(req, res) {
	models.actions.findById(req.params.id).then(resp => {
		res.json({ resp });
	});
});

router.post("/create", function(req, res) {
	const {
		personnel_code,
		action_type,
		termination_reason,
		reason_for_action,
		employment_status,
		from,
		to
	} = req.body;
	console.log(req.body);
	models.actions
		.create({
			personnel_code,
			action_type,
			termination_reason,
			reason_for_action,
			employment_status,
			from,
			to
		})
		.then(resp => {
			res.json({ resp });
		});
});

module.exports = router;
