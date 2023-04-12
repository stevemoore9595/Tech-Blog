const { Model, DataTypes } = require('sequelize');
const sequelize = require ('./config.connection');

class Post extends Model {};

Post.init ({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 30,
        }  
    },
    desciption: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    }, {
        sequelize
});

module.exports = Post