const express = require('express');

const router = express.Router();

 const homecontrol = require('../controller/homecontroller');


router.get('/',homecontrol.home);
router.get('/sign-up',homecontrol.sign_up);

router.get('/sign-in',homecontrol.sign_in);

router.post('/users/create',homecontrol.create);



module.exports = router;
