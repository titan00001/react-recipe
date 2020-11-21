const express = require('express');

const { getItemsByIds : getRecipesByIds} = require('../recipe/model');

const { getItem : getUser, addToModel : addUser } = require('../user/model');

const {login, register} = require('../authenticate/model');

// implement Search by tags

const router = express.Router();

router.get('/user=:id/created', (req, res) => {

    getUser(req.params.id).then(user => {
        return user.recipes;
    }).then(recipes => {
        return getRecipesByIds(recipes["created"]);
    }).then(recipes => {
        res.send(recipes);
    }).catch(e => console.error(e));
    
});

router.get('/user=:id/liked', (req, res) => {

    getUser(req.params.id).then(user => {
        return user.recipes;
    }).then(recipes => {
        return getRecipesByIds(recipes["liked"]);
    }).then(recipes => {
        res.send(recipes);
    }).catch(e => console.error(e));
    
});


router.post('/login', (req, res) => {

    let loginParam = req.body;
    login(loginParam.userName, loginParam.password).then(user => {
        if(!user) res.send({"userID" : "0"});
        else {
            res.send({"userID" : user.userID});
            console.log(user.userID)
        }
    }).catch( err => {
        console.error(err);
        res.send({"userID" : "0"});
    });
})

// router.post('/login', (req, res) => {

//     let loginParam = req.body;

//     login(loginParam.userName, loginParam.password)
//     .then(user => {
//         if(user) return addToModel(user);
//         })
//     .then(val => res.send)
//     .then()
// })


router.post('/register', (req, res) => {

    let registerParam = req.body; 
    let user = {"userName" : registerParam["userName"]}
    addUser(registerParam).then(user => {
        return user._id;
    }).then(id => { return register(registerParam.userName, registerParam.password, id) })
    .then(val => {
        console.log(val.userID);
        res.send({"userID" : val.userID});
        console.log("Reistered", val)
    }).catch( err => {
        console.error(err);
        res.send({"userID" : "0"})
    });
})


// let testRegister = 
// {
//     "userName" : "Gill",
//     "password" : "1234"
// }



// router.get('/user=:id/recipes', (req, res) => {

//     getUser(req.params.id).then(user => {
//         return user.recipes;
//     }).then(recipes => {
//         return getRecipesByIds(recipes["liked"]);
//     }).then(recipes => {
//         res.send(recipes);
//     }).catch(e => console.error(e));
    
// });


module.exports = router;