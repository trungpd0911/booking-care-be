// const { render } = require("ejs");
const db = require("../models/index");
const CRUDService = require("../services/CRUDService");

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs");
}

let getAboutPage = (req, res) => {
    return res.render("about.ejs");
}

let postCRUD = async (req, res) => {
    console.log(req.body);
    let message = await CRUDService.createNewUser(req.body);
    // console.log(message);
    return res.send("Post crud from server");
}

let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log(data);
    return res.render("displayCRUD.ejs", {
        dataTable: data
    })
};

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        console.log(userData);
        return res.render("editCRUD.ejs", {
            user: userData
        });
    } else {
        return res.send("User not found");
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render("displayCRUD.ejs", {
        dataTable: allUsers
    });
}

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
};