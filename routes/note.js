var Notes = require('../models/notes');

var express= require('express');
var router = express.Router();

router.get('/', function (req,res,next) {
    debugger;
    console.log("inside get");
    Notes.find()
    .exec(function(err, notes){
        console.log(notes);
        if(err){
            return res.status(500).json({
                title:"an error occured",
                error:err
            });
        }
        else{
           return res.status(200).json({
                message:'Success',
                obj:notes
            });
        }

    });
});


router.post('/', function(req,res,next){
    var note = new Notes({
        content : req.body.content

    });
    console.log("inside post");
    note.save(function(err,result){
        if(err){
            return res.status(500).json({
                title:'an error occured',
                error:err
            });
        }
        res.status(201).json({
            message:'Saved message',
            obj:result
        });
    })


})

module.exports = router;