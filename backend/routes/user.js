const { Router } = require("express");
const router = Router();

const { User,Course } = require("../db");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    const contact=req.body.contact;
   let val=await User.findOne({username:username})
  if(val){
    res.json({
        message:`user of username ${val.username} already exist`
    })
    return
  }
    const newUser=await User.create({
        username,
        password,
        contact
    })
    res.json({
        message:"sucessfully created"
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    let val=await User.findOne({
        username:username,
        password:password
    })
    if(val){
        
        res.json({
            message:`you are now signed in !!`,
            
        })
    }else{
        res.status(403).json({
            message:"user does not exist"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const lang =req.params.lang;
    const courses=await Course.find({});
   res.status(200).json({
    courses:courses
   })

});
router.get('/courses/:lang', async (req, res) => {
    // Implement listing all courses logic
    const lang =req.params.lang;
    const courses=await Course.find({language:lang});
   res.status(200).json({
    courses:courses
   })

});


module.exports = router