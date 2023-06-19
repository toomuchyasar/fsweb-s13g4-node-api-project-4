

function validatePayload(req,res,next) {
try {
    let {username, password} = req.body;
    if(!username || !password) {
        res.status(400).json({message:"Alanları kontrol ediniz"})
    }else {
        next()
    }
} catch (error) {
    next(error);
}
}

function validateLogin(req,res,next) {
    try {
        let existUser = userModel.findUser(req.body.username, req.body.password)
        if(!existUser){
            res.status(404).json({message:"kullanıcı yok"})
        }else {
            next();
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {validateLogin,validatePayload}