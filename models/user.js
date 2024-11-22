const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");

const personschema= new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    
    password:{
        type:String,
        required:true
    },
    usertype: {
        type: String,
        default: "user", // This will set the default value to "user"
      },

});
personschema.methods.comparePassword=async function(candidatePassword){
    try{
        return await bcrypt.compare(candidatePassword, this.password);
    }
    catch(err){
        throw err;
    }
}


const User=mongoose.model("User",personschema)
module.exports=User;