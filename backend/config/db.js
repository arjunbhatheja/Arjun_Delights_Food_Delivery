import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://arjunbhathejaus:rb3c0vqwOQMyhWRw@cluster0.ibsr4.mongodb.net//Arjun-Delights').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.