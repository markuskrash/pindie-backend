const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");
const {sendDashboard} = require("../controllers/auth");
const {checkCookiesJWT, checkAuth} = require("../middlewares/auth");


pagesRouter.get("/", sendIndex);
pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);

module.exports = pagesRouter;