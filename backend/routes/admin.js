const { Router } = require("express");
const router = Router();

const { Admin,Course } = require("../db");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    const language=req.body.language;
    const contact=req.body.contact;
   let val=await Admin.findOne({username:username})
  if(val){
    res.json({
        message:`user of username ${val.username} already exist`
    })
    return
  }
    const newAdmin=await Admin.create({
        username,
        password,
        language,
        contact,
    })
    res.json({
        message:"sucessfully created"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    let val=await Admin.findOne({
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

router.post('/courses',async (req, res) => {
    // Implement course creation logic
    const tutorname=req.body.tutorname;
    const title=req.body.title;
    const language=req.body.language;
    const description=req.body.description;
    const price=req.body.price;

 const newCourse=await Course.create({
    tutorname, title,language,description,price
 })

res.status(200).json({
    message:`Course created successfully', courseId:${newCourse._id}`
})
});

router.get('/courses',async (req, res) => {
    // Implement fetching all courses logic
    const tutorname=req.body.tutorname;
const response=await Course.find({tutorname:tutorname});
res.status(200).json({
    courses:response
})
   
});

module.exports = router;