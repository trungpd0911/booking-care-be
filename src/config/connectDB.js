const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('trungg', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
    // giup khong hien thi cac cau lenh query tren console 
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;