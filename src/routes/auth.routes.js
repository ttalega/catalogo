const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller.js');

const { requireAuth } = require('../middlewares/auth.middleware.js')

router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/profile', requireAuth, (req, res) => {
    res.render('profile');
});

module.exports = router;
