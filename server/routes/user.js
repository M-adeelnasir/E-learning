const express = require('express');
const router = express.Router();

const { create } = require('../controllers/user')

router.get('/user/add', create)

module.exports = router