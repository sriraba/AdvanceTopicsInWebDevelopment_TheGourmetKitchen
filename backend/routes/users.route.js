const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users.controller');

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.patch('/update', UserController.updateUser);
router.post('/:email', UserController.validUser);
router.get('/:email', UserController.getUserByEmail);
router.delete('/', UserController.deleteUser);

module.exports = router;