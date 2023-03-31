const express = require('express');
const router = express.Router();

const {
    createUser,
    getUsers,
    updateUser,
    getUserByEmail,
    deleteUser,
    validUser,
    sendEmail,
    validCode,
    updateUserProfile
} = require('../Controllers/usersController');

router.post('/', createUser);
router.get('/', getUsers);
router.post('/update', updateUser);
// router.post('/:email', UserController.validUser);
router.get('/:email', getUserByEmail);
router.post('/delete', deleteUser);
router.post('/validuser', validUser);
router.post('/sendCode', sendEmail);
router.post('/validCode', validCode);
router.post('/updateprofile', updateUserProfile);

module.exports = router;