/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');

/// ***************** 
const uri = "mongodb+srv://db:db@cluster0-3bzus.mongodb.net/ATN?retryWrites=true&w=majority";


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase =  "ATN"; // "CloudDB";



module.exports = {
    Client : MongoClient,
    Mongosee : mongosee,
    URI : uri,
    DBname : NameDataBase,
};
