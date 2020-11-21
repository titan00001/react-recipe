const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/RecipeDB', {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false    }, 
  ).then(() => { console.log("connected to RecipeDB/logger port 27017")})
  .catch(err => console.error(err));


var loginSchema = new mongoose.Schema({
    userID : String,
    userName : {type : String, unique : true },
    password : String
});

const Logger = mongoose.model('Logger', loginSchema);


async function login(name, pw) {

    const user = await Logger.find({userName : name, password : pw})
    .then(val => {
        if(val.length === 0) throw "No user exists";
        else return val;
    }).catch(e => {
        console.error(e);
    });
    return user;
}


async function register(name, pw, id) {
    
    const user = new Logger({userName : name, password : pw, userID : id});

    const userPromise = await Logger.find({userName : name, password : pw})
    .then(val => {

        console.log(val.length);
        if(val.length === 0)    return user.save();
        else    console.log("Duplicate username found");

    }).catch((e) => {
        console.error(e);
    });

    return userPromise;
}

module.exports = {login, register}