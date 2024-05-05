const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    // Используем метод populate для загрузки данных
    // из моделей categories и users по их id
    const result = await games.find({}).populate("categories").populate("users");
    console.log(result);
    next();
};


module.exports = findAllGames;