const updateOrCreate = (model, where, newItem, action) => {
	if (action == "update") {
		return model.findOne({ where }).then(foundItem => {
			return model.update(foundItem, { where }).then(item => {
				return { item, created: false };
			});
		});
	} else if (action == "create") {
		return model
			.create(newItem)
			.then(item => {
				return { item, created: true };
			})
			.catch(err => err);
	}
};

const createBulk = (model, items) => {
	return model.bulkCreate(items).then(newItems => {
		return newItems;
	});
};

module.exports = { updateOrCreate, createBulk };
