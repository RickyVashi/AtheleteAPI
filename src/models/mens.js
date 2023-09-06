const express = require("express");
const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");


const menSchema = new Mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:String,
        required:true,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100 m"
    },
})

//New Collection
const MensRanking = new mongoose.model("MenRanking",menSchema)

module.exports = MensRanking;