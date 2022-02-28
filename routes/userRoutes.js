const express = require("express");
const {list_total_no_of_farmer_cattles} = require("../controllers/userController");
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart({ uploadDir: "./uploads" });
const router = express.Router();

router.get("/list_total_no_of_farmer_cattles",multipartMiddleware,list_total_no_of_farmer_cattles);


module.exports = {
  routes: router
};
