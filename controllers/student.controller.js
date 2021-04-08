const Student = require('../models/student.model')

exports.student_create = (req, res) => {
    let student = new Student({
        name : req.body.name,
        regno : req.body.regno,
        course : req.body.course
    });
    student.save(err => {
        if (err) {return next(err);}
        res.redirect('/list');
    })
};

exports.student_formcreate = (req, res) => {
    res.render('createform', { page: 'New Student', menuId : 'createform'});
}

exports.student_detail = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {return next(err);}
        res.send(student);
    })
}

exports.student_updateform = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if(err) {return next(err);}
        res.render('updateform', { page: 'Update Student', menuId : 'updateform', student: student });
    })
}

exports.student_update = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body},(err, student) => {
        if(err) {return next(err);}
        res.redirect('/list');
    })
}

exports.student_delete = (req, res) => {
    Student.findByIdAndRemove(req.params.id, (err) => {
        if (err) {return next(err);}
        res.redirect('/list');
    })
}

exports.list = (req, res) => {
    Student.find((err, student) => {
        if (err) {console.log("Error in retrieving students list",+ JSON.stringify(err,undefined, 2));}
        res.render('list', {page : 'Student List', menuId: 'list', student: student});
    })
}