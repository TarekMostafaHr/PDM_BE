var models = require("../models");
var express = require("express");
var router = express.Router();
const { updateOrCreate, createBulk } = require("./util");

// get all
router.get("/", function(req, res) {
	models.user
		.findAndCountAll()
		.then(resp => {
			res.json({ count: resp.count, rows: resp.rows });
		})
		.catch(err => res.end(err));
});

router.get("/:id", function(req, res) {
	models.user
		.findById(req.params.id)
		.then(resp => {
			res.json({ resp });
		})
		.catch(err => res.end(err));
});

router.post("/create", function(req, res) {
	updateOrCreate(models.user, { id: req.params.id }, req.body, "create")
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

// create bulk
router.post("/create/bulk", function(req, res) {
	createBulk(models.user, req.body)
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

// update one
router.put("/:id", function(req, res) {
	updateOrCreate(models.user, { id: req.params.id }, req.body, "update")
		.then(result => res.json({ result }))
		.catch(err => res.end(err));
});

router.delete("/:id/destroy", function(req, res) {
	models.user
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
