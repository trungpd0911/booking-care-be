const bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
const db = require("../models/index");

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phonenumber: data.phonenumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
                // image: data.image,
                // positionId: data.positionId,
            })

            resolve('ok create new user success');
        } catch (error) {
            reject(error);
        }
    });
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);

        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createNewUser: createNewUser
}