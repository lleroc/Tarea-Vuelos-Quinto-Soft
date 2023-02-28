import mongoose from 'mongoose';
export const PasagerosSchema = new mongoose.Schema({
    nombre:{type:String, require:true},
    email:{type:String, require:true},
})

PasagerosSchema.index({email:1},{unique:true})