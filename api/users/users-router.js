const router = require("express").Router();
const mw = require("./users-middleware");
const usersModel = require("./user-model")


router.get("/users",(res,req,next)=> {
    try {
        const allUsers = usersModel.getAllUsers();
        res.json(allUsers)
    } catch (error) {
        next(error)
    }

});

router.post("/register",mw.validatePayload,(res,req,next)=> {
try {
    let userObj = {
        username : req.body.username,
        password : req.body.password,    
    }
    res.json(userObj)
} catch (error) {
    next(error)
}
});

router.post("/login",(res,req,next)=> {
    res.status(500).json({message : `merhaba ${username}, hoşgeldin `})
});