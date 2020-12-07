const express = require('express')
const router = express.Router()

const Novel = require('../models/novel');
const novel = require('../models/novel');

router.get('/', function (req, res, next) {

    Novel.find((err, novels) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('novels/index', {
                novels:novels
            })
                
        }
    })


    
});

router.get('/add', (req, res, next) => {
    res.render('novels/add')
        
})

router.post('/add', (req, res, next) => {
    Novel.create({
        book: req.body.book,
        priority: req.body.priority
    }
        , (err, novel) => {
            if (err) {
                console.log(err)
                res.end(err)
            }
            else {
                res.redirect('/novels')
            }

        })
})

router.get('/delete/:_id',  (req, res, next) => {
    var _id = req.params._id;
    //Use Mongoose to delete the selected document from the DB
    Novel.remove({ _id: _id }, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/novels')
        }
    })
})


router.get('/edit/:_id',  (req, res, next) => {
    //store the _id parameter in a local var
    var _id = req.params._id

    Novel.findById(_id, (err, novel) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.render('novels/edit',
                {
                    novel: novel,
                    user: req.user
                })
        }
    })
})




router.post('/edit/:_id',    (req, res, next) => {
    var _id = req.params._id
    //parse checkbox to a boolean
    let complete = false
    if (req.body.complete === "on") {
        complete = true
    }

    console.log('Complete value: ' + req.body.complete)
   
    var novel = new Novel({
        _id: _id,
        book: req.body.book,
        priority: req.body.priority,
        complete: complete
    })
    
    Novel.update({ _id: _id }, novel, (err) => {
        if (err) {
            console.log(err)
            res.end(err)
        }
        else {
            res.redirect('/novels')
        }
    })
})






//Make Controller Public
module.exports = router;