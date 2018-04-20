const models = require("../models");
const express = require("express");
const router = express.Router();
const { updateOrCreate, createBulk } = require("./util");

// get all
router.get("/", function(req, res) {
	models.personal_information
		.findAndCountAll()
		.then(resp => {
			res.json({ count: resp.count, rows: resp.rows });
		})
		.catch(err => res.end(err));
});

router.get("/:id", function(req, res) {
	models.personal_information
		.findById(req.params.id)
		.then(resp => {
			res.json({ resp });
		})
		.catch(err => res.end(err));
});

router.post("/create", function(req, res) {
	updateOrCreate(models.personal_information, null, req.body, "create")
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

// create bulk
router.post("/create/bulk", function(req, res) {
	createBulk(models.personal_information, req.body)
		.then(result => res.json({ result }))
		.catch(err => res.end({ err }));
});

// update one
router.put("/:id", function(req, res) {
	updateOrCreate(
		models.personal_information,
		{ id: req.params.id },
		req.body,
		"update"
	)
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

router.delete("/:id/destroy", function(req, res) {
	models.personal_information
		.destroy({
			where: {
				id: req.params.id
			}
		})
		.then(resp => {
			res.json({ message: "deleted" });
		})
		.catch(err => res.end(err));
});

module.exports = router;
