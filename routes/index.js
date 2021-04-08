var express = require('express');
var router = express.Router();
var student_controller = require("../controllers/student.controller");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home', menuId: 'Home' });
});

router.get('/about', function (req, res, next) {
  res.render('about', { page: 'About us', menuId: 'about' });
});

router.get('/contact', function (req, res, next) {
  res.render('contact', { page: 'Contact us', menuId: 'contact' });
});

router.get('/list', student_controller.list);
router.get('/createform', student_controller.student_formcreate);
router.post('/create', student_controller.student_create);
router.post('/:id/delete', student_controller.student_delete);
router.post('/updateform/:id', student_controller.student_updateform);
router.post('/:id/update', student_controller.student_update);

module.exports = router;
