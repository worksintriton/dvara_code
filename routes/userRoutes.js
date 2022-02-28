const express = require("express");
const {
  listallloan,
  findloanbyId,
  findloanTransactions,
  listallreports,
  findreportsbyId,
  listallclient,
  findclientbyId,
  findclientAccount
} = require("../controllers/userController");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ uploadDir: "./uploads" });
const router = express.Router();

router.post("/listallloan",multipartMiddleware,listallloan);
router.post("/findloanbyId",multipartMiddleware,findloanbyId);
router.post("/findloanTransactions",multipartMiddleware,findloanTransactions);
router.post("/listallreports",multipartMiddleware,listallreports);
router.post("/findreportsbyId",multipartMiddleware,findreportsbyId);
router.post("/listallclient",multipartMiddleware,listallclient);
router.post("/findclientbyId",multipartMiddleware,findclientbyId);
router.post("/findclientAccount",multipartMiddleware,findclientAccount);

module.exports = {
  routes: router
};
