const express=require('express');
const {login,register, getAllUsers, deleteUser}=require('../controllers/adminControllers');  
const { validate, registerValidator } = require('../middleware/validateMiddleware');
const adminRouter=express.Router();


adminRouter.route("/login").get(login).post(login);
adminRouter.route("/register").get(register).post(validate(registerValidator),register);
adminRouter.route("/allUsers").get(getAllUsers);
adminRouter.route("/deleteUser").delete(deleteUser);

module.exports=adminRouter;