const User = require('../model/user')


module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.render('home')
};

module.exports.sign_in = (req,res)=>{
    res.render('user_sign_in')
};

module.exports.sign_up = (req,res)=>{
    res.render('user_sign_up')
};


// findone use for finding data from the database
module.exports.create = async(req,res)=>{
   if(req.body.password!=req.body.confirm_password){
    return res.redirect('back')
   }else{
    try{
        const data = await User.findOne({email:req.body.email});

            if (!data) {
                await User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password 
                })
                return res.redirect('/sign-in')
            }
            if(data){
                console.log(data)
            }      
    } catch (err){
        console.log(err)
    }
}
   
} 


