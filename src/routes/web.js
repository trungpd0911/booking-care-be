const express = require('express');
const homeController = require('../controllers/homeController');

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/crud", homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    // create new user
    router.get('/get-crud', homeController.displayGetCRUD);
    // get all user
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    // edit user

    return app.use("/", router);
};

module.exports = initWebRoutes;