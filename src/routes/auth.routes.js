const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/auth.controller.js');
const { requireAuth } = require('../middlewares/auth.middleware.js')

router.get('/login', authCtrl.showLogin);
router.post('/login', authCtrl.login);
router.get('/logout', authCtrl.logout);

router.get('/profile', requireAuth, (req, res) => {
    res.render('profile');
});

module.exports = router;
