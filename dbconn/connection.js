const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://gngit2010:gngjain1234@cluster0.dahu3zg.mongodb.net/6prilmahaveer')
  .then(() => {
    console.log("our connection is successfully");
  }).catch((e) => {
    console.log(e);
  });

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },

    name:{
        type:String,
        
    },
    fs:{
        type:String,
        
    },
    ss:{
        type:String,
        
    },
    heading:{
        type:String,
        
    },
    subheading:{
        type:String,
        
        
    },
    sutar:{
        type:String,
        
    },
    arth:{
        type:String,
        
        
    },
    description:{
        type:String,
        

    },
    mediname:{
        type:String,
        
    },
});

const Project = mongoose.model("Project", schema);
module.exports = Project;
