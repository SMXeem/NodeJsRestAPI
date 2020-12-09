const express =require('express');

const router= express.Router();
const Post= require('../models/post');

// router.get('/', (req,res)=>{
//     res.send('We are on posts');
// });

//get all post
router.get('/', async (req,res)=>{
    try{
        const posts= await Post.find();
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});
//get by id
router.get('/:postId', async (req,res)=>{
    try{
        const posts= await Post.findById(req.params.postId);
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});

//delete post
router.delete('/:postId', async (req,res)=>{
    try{
        const posts= await Post.remove({_id: req.params.postId});
        res.json(posts);

    }catch(err){
        res.json({message:err});
    }
});
//update post
router.patch('/:postId', async (req,res)=>{
    try{
        const posts= await Post.updateOne({_id: req.params.postId},{$set: {title: req.body.title}});
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
    const post =new Post({
        title: req.body.title,
        des: req.body.des
    });
    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err =>{
    //     res.json({message: err});
    // })
    try{
        const savedPost= await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err});
    }

});

module.exports = router;