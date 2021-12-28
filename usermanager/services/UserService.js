
var userRepo = require("../repositories/UserRepository")

async function saveUser(data){
    return  await userRepo.insertItem(data)
}

async function getUserById(id){
    return userRepo.getUserById(id)
}

async function updateUser(id, data){
    return await userRepo.updateUser(id,data)
}

async function deleteUSerById(id){
    return await userRepo.deleteUser(id)
}



module.exports ={
    saveUser ,
    getUserById ,
    updateUser,
    deleteUSerById
}