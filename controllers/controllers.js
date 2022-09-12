export const createUser = (req,res)=> {
    
    let user = req.body
    users.push({...user, id: uuidv4()})
    res.send(`New user ${user.firstname} added to database!`)
}