import express from 'express';
import User from '../models/user';

let router = express.Router();

export default router;

router.route('/').get(function(req,res){
    let messages = [];
    User.forge().query({
        select: [ 'username', 'email' ]
    }).fetchAll().then(function(users){
    console.log("get all users");
        if(users){
        console.log('getting all users');
                messages.push("users has been found");
                res.status(200).send({
                    error: false,
                    message: messages,
                    users: users
                });
        }
        else{
            messages.push("No users exist.");
            res.status(404).json({
                error: true,
                message: messages,
                data:null
            });
        } 
    }).catch(function(err){
        messages.push("There was an error getting the records. Please try again");
        messages.push(err.message);
            res.status(400).json({
                error: true,
                message: messages,
                data:null
            });
    });
});
// .post(function(req,res){
//     let messages = [];
//     User.forge({email: req.body.email}).fetch().then(function(model){
//         if(model){
//             messages.push("This email is already taken.  Try logging in.");
//             res.status(400).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//         }
//         else{
//             User.forge().save({
//                 username: req.body.username,
//                 email: req.body.email,
//             }).then(function(model){
//                 messages.push("User has been created successfully");
//                 res.status(201).send({
//                     error: false,
//                     message: messages,
//                     data: model
//                 });
//             });
//         } 
//     }).catch(function(err){
//         messages.push("There was an error saving this record. Please try again");
//         messages.push(err.message);
//             res.status(400).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//     });

// });

// router.route('/users/:id').get(function(req, res){
//     var User = require('../models/user');
//     var messages = [];
//     User.forge({id: req.params.id}).fetch().then(function(model){
//         if(model){
//                 messages.push("User has been found");
//                 res.status(200).send({
//                     error: false,
//                     message: messages,
//                     data: model
//                 });
//         }
//         else{
//             messages.push("The user id could not be found. Please check your input and try again.");
//             res.status(404).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//         } 
//     }).catch(function(err){
//         messages.push("Bad request.");
//         messages.push(err.message);
//             res.status(400).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//     });
// })
// .put(function(req,res){
//     updateUser(req,res);
// })
// .patch(function(req,res){
//     updateUser(req,res);
// })
// .delete(function(req,res){
//     var User = require('../models/user');
//     var messages = [];
//     User.forge({id: req.params.id}).save({inactive: 1}, {patch:true}).then(function(model){
//         if(model){
//                 messages.push("User has been deleted successfully");
//                 res.status(200).send({
//                     error: false,
//                     message: messages,
//                     data: model
//                 });
//         }
//         else{
//             messages.push("The user id could not be found. Please check your input and try again.");
//             res.status(404).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//         } 
//     }).catch(function(err){
//         messages.push("Bad request.");
//         messages.push(err.message);
//             res.status(400).json({
//                 error: true,
//                 message: messages,
//                 data:null
//             });
//     });
// });

// function updateUser(req,res){
//         var User = require('../models/user');
//         var messages = [];
//         User.forge({id: req.params.id}).save({
//                     first: req.body.first,
//                     last: req.body.last,
//                     email: req.body.email,
//                     admin: req.body.admin,
//                     password_digest: req.body.password_digest
//             }, {patch:true}).then(function(model){
//             if(model){
//                     messages.push("User has been edited successfully");
//                     res.status(200).send({
//                         error: false,
//                         message: messages,
//                         data: model
//                     });
//             }
//             else{
//                 messages.push("The user id could not be found. Please check your input and try again.");
//                 res.status(404).json({
//                     error: true,
//                     message: messages,
//                     data:null
//                 });
//             } 
//         }).catch(function(err){
//             messages.push("Bad request.");
//             messages.push(err.message);
//                 res.status(400).json({
//                     error: true,
//                     message: messages,
//                     data:null
//                 });
//         });
//     }