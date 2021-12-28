const MongoClient = require('mongodb').MongoClient
const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'users'


const crypto = require("crypto");
const id = crypto.randomBytes(12).toString("hex");

let db
const init = () =>
  MongoClient.connect(connectionUrl).then((client) => {
      console.log("db connect")
    db = client.db(dbName)
    collection = db.collection('user')
  })

async function insertItem(item){
    item["_id"] = id
    const inserDb =  collection.insertOne(item).then(data => {
    return data;
})
.catch(e => {
    console.log(e)
    return e
});
  return inserDb
}

async function getUserById(id){
  var query = { "_id" : id}
  console.log(query)
  return collection.find(query).toArray()

}
  
async function updateUser(id, data){
  console.log(data)
  var filter = {"_id": id}
  var doc = {$set: data}
  var options = {upsert: false}
  console.log(filter)
  console.log(doc)

  return collection.findOneAndUpdate(filter,doc,options)
}


async function deleteUser(id){
  var filter = {"_id": id}
  return collection.deleteOne(filter).then(d =>{
    console.log(d)
    return d
  }).catch(e =>{
    return e
  })
}


module.exports = {
   init ,
   insertItem ,
   getUserById,
   updateUser,
   deleteUser
}
