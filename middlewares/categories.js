const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
}

// Экспортируем функцию поиска всех категорий
module.exports = findAllCategories;