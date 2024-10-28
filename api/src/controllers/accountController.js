class AccountController{
    getAllAccounts=(req, res)=>{
       try {
        res.status(200).json({message: "All accounts fetched successfully"})    
       } catch (error) {
        throw new Error(error)
        
       }
    }
}


export default new AccountController()