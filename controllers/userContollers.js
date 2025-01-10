const addUser = async(req,res)=>{
    try{
        const {email,password} = req.body;
    }catch (err){
        res.status(500).json('server')
    }
}