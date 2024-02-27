//const userRouter('express').Router()
const express = require('express')
const userRoute = express.Router()

const { readAll, createUser, updateUser, deleteUser, readSingle}= require('../controller/userController')


//read all users => get request method ->/api/user/all
userRoute.get(`/all`, readAll)

//read single users => get request method ->/api/single/123
userRoute.get(`/single/:userId`, readSingle)

//create new users => post request method  ->/api/create
userRoute.post(`/create`,createUser)

//update existing users => patch request  ->/api/update/123
userRoute.patch(`/update/:id`,updateUser)

//delete existing user => delete request ->/api/user/delete/123
userRoute.delete(`/delete/:id`,deleteUser)

module.exports = userRoute