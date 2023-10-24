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

module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
};