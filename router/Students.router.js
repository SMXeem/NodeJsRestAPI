const express =require('express');

const router= express.Router();
const Student= require('../models/student');

//get all post
router.get('/', async (req,res)=>{
    try{
        const posts= await Student.find();
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});
//get by id
router.get('/:studentId', async (req,res)=>{
    try{
        const posts= await Student.findById(req.params.studentId);
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

//delete post
router.delete('/:studentId', async (req,res)=>{
    try{
        const posts= await Student.remove({_id: req.params.studentId});
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});
//update post
router.patch('/:studentId', async (req,res)=>{
    try{
        const posts= await Student.updateOne({_id: req.params.studentId},{$set: {title: req.body.name}});
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

router.get('/new', (req,res)=>{
    res.send('We are on posts New');
});

//Submit a post
router.post('/', async (req,res)=>{
    const student =new Student({
        name: req.body.name,
        roll: req.body.roll
    });
    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err =>{
    //     res.json({message: err});
    // })
    try{
        const savedPost= await student.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }

});

module.exports = router;