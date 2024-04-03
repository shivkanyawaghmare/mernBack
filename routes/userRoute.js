const express = require('express');
const UserModel = require('../models/UserModel')
const router = express.Router()

router.post('/register',async(req,res)=>{
    try{
        // const user = new UserModel(req.body)
        // await user.save()
        // res.status(201).send(user)
        const existingUser = await UserModel.findOne({email: req.body.email})
        if(existingUser) {
            return res.status(400).send("User already exists")
        }
        const newitem = new UserModel(req.body)
        await newitem.save()
        res.send("Data has been inserted")
    }
    catch(error){
        res.status(500).send('Server Error')
    }
})

router.post('/login', async (req, res) => {
    try {
      const user = await UserModel.findOne({
        email: req.body.email,
        password: req.body.password,
      })
      // delete result.password
      // res.send(result)
      if (user) {
        const usertobj = user.toObject()
        delete usertobj.password
        res.send(usertobj)
      }}
      catch(error){
        console.log(error)
        res.status(500).send("error")
      }
    })
  
module.exports = router;