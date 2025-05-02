const express = require("express");
const { register, login } = require("../controllers/users");
const { validation } = require("../middleware/validation");
const { loginSchema } = require("../validation/login.validation");
const { registerSchema } = require("../validation/register.validation");
const router = express.Router();

router.post("/", validation(registerSchema), register);
router.post("/login", validation(loginSchema), login);

module.exports = router;
