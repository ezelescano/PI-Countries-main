const { Country, Activity } = require("../db");
const axios = require("axios");


const getCountries = (async () => {
        console.log("mauro cosologuea countDB dentro del controller")
    const countDB = await Country.findAll({
        
        attributes: ['imgflag', 'name', 'continent', 'population'],
        include: {
            model: Activity,
            attributes: ["name"],
            through: { attributes: [] },
        }
    })
console.log("countDB", countDB[0])
    return countDB;
});



const getCountryByName = async (name) => {
    const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    // const coutryName = await Country.findAll({ where: { name: name } });
//     return coutryName;
// }

const coutryName = await Country.findAll({ where: { name: upperCaseName }, include: {
    model: Activity,
    attributes: ["name"],
    through: { attributes: [] },
} });
console.log("controlando contry by name ", coutryName)
return coutryName;
}


const countryIdController = async (id) =>{
    const idCountry = await Country.findByPk(id.toUpperCase(), {
        include: {
            model: Activity,
            attributes: ["name", "dificulty", "duration", "season"]
        }
    });
    return idCountry;
};

module.exports = {
    getCountries,
    getCountryByName,
    countryIdController
}