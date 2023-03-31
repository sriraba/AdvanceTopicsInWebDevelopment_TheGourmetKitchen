const express = require('express');
const router = express.Router();

const UserController = require('../controllers/users.controller');

router.post('/', UserController.createUser);
router.get('/', UserController.getUsers);
router.post('/update', UserController.updateUser);
// router.post('/:email', UserController.validUser);
router.get('/:email', UserController.getUserByEmail);
router.post('/delete', UserController.deleteUser);
router.post('/validuser', UserController.validUser);
router.post('/sendCode', UserController.sendEmail);
router.post('/validCode', UserController.validCode);
router.post('/updateprofile', UserController.updateUserProfile);

module.exports = router;