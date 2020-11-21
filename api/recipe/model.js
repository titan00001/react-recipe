// This module binds the state of model to database using mongoose package

// Get List of All Recipes
// Get Single Item from List
// Get Multiple Item from List
// Add Item To List
// Edit item in List

const mongoose = require('mongoose');

// const data = require('./recipeTest.json');
// console.log(data[0]);

mongoose.connect('mongodb://localhost:27017/RecipeDB', {useNewUrlParser: true, 
useUnifiedTopology: true,
  useFindAndModify: false}, 
  function(err) {
    if(err)
      console.error(err)
    else  
      console.log("connected to RecipeDB/recipes port:27017")
    }
);


var recipeSchema = new mongoose.Schema({
  name:  {
    type: String,
    default: ""
  },
  author: {name: String,
            id: {type: String}
          },
  date: String,
  description: String,
  tips: [ {type: String} ],
  materials: [ {type: String} ],
  instructions: [ {type: String} ],
  tags : [ {type: String} ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);


async function getModel() {

  let result = await Recipe.find();
  return result;
}


async function addToModel(data) {

  data = new Recipe(data);
  let result = await data.save();
  
  return result;
  
}
// only for testing

// for(var i = 0; i < 15; i++){
//   addToModel(data[i]).then((val) => {
//     console.log("added")
//   }, (err) => {
//     console.error(err);
//   });
// }


async function getItem(id) {
  let result = await Recipe.findById(id);
  return result;
}


async function updateItem(id, newData) {

  let promise = await Recipe.findByIdAndUpdate(id, newData, (err, val) => {
    if(err) console.error(err);
    else  console.log(val);
  });

  return promise;
}


async function getAllItems(parameter) {


  let promise = await Recipe.find(parameter);
  return promise;
}


async function getItemsByIds(list) {


  let records = await Recipe.find().where("_id").in(list);
  return records;
}


module.exports = {addToModel, getModel, getAllItems, getItem, updateItem, getItemsByIds};