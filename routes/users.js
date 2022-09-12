import express from 'express'
import { v4 as uuidv4 } from 'uuid';


const router = express.Router()
let users = []
//all routes here are starting with /users
router.get('/', (req,res) =>res.send(users))
router.post('/',(req,res)=> {
    
    let user = req.body
    res.send(`New user ${user.firstname} added!`)
    let userid =  uuidv4(); 
    const userwithid = {...user, id: userid}

    users.push(userwithid)
})

router.get('/:id',(req,res)=>{
    const { id } = req.params
    let founduser =  users.find((user)=> user.id === id)
    res.send(founduser)
})
router.delete('/:id', (req,res)=>{
    const id = req.params.id
    users = users.filter((user)=> user.id != id)
    res.send(`user with the id ${id} has been deleted for the database`)
})

router.patch('/:id', (req, res)=>{
    const { id } = req.params
    const { firstname , lastname , age } = req.body

    const user = users.find((user)=> user.id === id)

    if(firstname){user.firstname = firstname}
    if(lastname){user.lastname = lastname}
    if(age){user.age = age}

    res.send(`user with the id: ${id} has been updated`)
})
export default router