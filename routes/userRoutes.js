const express = require('express');
const router = express.Router();
const { signup, login ,logout , createUser} = require('../controllers/UserController');
const { validation, errorValidation } = require('../middlewares/HandleValidation');
const { isAuthenticated } = require('../middlewares/Authentication');
const { hasRole } = require('../middlewares/Authorization');

router.post('/addUser', validation.createUser, errorValidation, createUser);

router.post('/signup' ,signup)

router.post('/login', isAuthenticated, hasRole, login)

router.post('/logout', logout)

export default router;