// This module binds the state of model to database using mongoose package


// Get Single User from Users
// Add User To Users
// Edit User info

const mongoose = require('mongoose');
// const data = require('./userTest.json');

mongoose.connect('mongodb://localhost:27017/RecipeDB', {useNewUrlParser: true, 
useUnifiedTopology: true,
  useFindAndModify: false}, 
  function(err) {
    if(err)
      console.error(err)
    else  
      console.log("connected to RecipeDB/users port:27017")
    }
);


var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    default: "",
    unique: true
  },
  name:  {
    type: String,
    default: ""
  },
  date: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  gender: {
    type: String,
    default: ""
  },
  image: {
    type: String,
    default: ""
  },
  recipes: {
    created: [{
      type: String,
      default: ""
    }],

    liked : [{
      type: String,
      default: ""
    }]
  }
});

const User = mongoose.model('User', userSchema);


  async function getModel() {

    let result = await User.find();
    return result;
  }



  async function addToModel(data) {

    data = new User(data);
    let result = await data.save();
    
    return result;
    
  }
// for testing
  // for(var i = 0; i < 1; i++){
  //   addToModel(data[i]).then((val) => {
  //     console.log("added")
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }



  async function getItem(id) {
    let result = await User.findById(id);
    return result;
  }


  async function updateItem(id, newData) {

    let promise = await User.findByIdAndUpdate(id, newData, (err, val) => {
      if(err) console.error(err);
      else  console.log(val);
    });

    return promise;
  }

  module.exports = {addToModel, getItem, updateItem, getModel};