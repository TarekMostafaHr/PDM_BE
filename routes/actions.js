const models = require("../models");
const express = require("express");
const router = express.Router();
const { updateOrCreate, createBulk } = require("./util");

// get all
router.get("/", function(req, res) {
	models.actions
		.findAndCountAll()
		.then(resp => {
			res.json({ count: resp.count, rows: resp.rows });
		})
		.catch(err => res.end(err));
});

// get one
router.get("/:id", function(req, res) {
	models.actions
		.findById(req.params.id)
		.then(resp => {
			res.json({ resp });
		})
		.catch(err => res.end(err));
});

// create
router.post("/create", function(req, res) {
	updateOrCreate(models.actions, null, req.body, "create")
		.then(result => res.json({ result: result }))
		.catch(err => res.end(err));
});

// create bulk
router.post("/create/bulk", function(req, res) {
	createBulk(models.actions, req.body)
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

// update one
router.put("/:id", function(req, res) {
	updateOrCreate(models.actions, { id: req.params.id }, req.body, "update")
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

router.delete("/:id/destroy", function(req, res) {
	models.actions
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
