    const { Sequelize, DataTypes } = require("sequelize");

    module.exports = (Sequelize)=>{
        Sequelize.define("activity", {
            id : {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
            },
            dificulty: {
                type: DataTypes.INTEGER,
                validate: {
                    min: 1,
                    max: 5,
                }
            },
            duration :{
                type:DataTypes.DATE,
            },
            season: {
                type: DataTypes.ENUM(
                    "summer",
                    "autumn",
                    "winter",
                    "spring"
                ),
            }
            
        });
    }