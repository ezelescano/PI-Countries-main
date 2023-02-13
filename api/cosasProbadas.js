const axios = require("axios");
const { Country } = require("../db");

const getCountries = async () => {
    
   
}   
        let result = {
            id: elem.cca3,
            name: [elem.name.common, elem.name.official],
            imgflag: elem.flags[1],
            capital: elem.capital ? elem.capital : ['No existe'],
            continent: elem.continents,
            subregion: elem.subregion ? elem.subregion : 'No existe',
            area: elem.area,
            population: elem.population
        }
        
        let { id, name, imgflag, capital, continent, subregion, area, population } = result;
        // console.log(capital);
        Country.findOrCreate({
            where: {
                id, name, imgflag, capital, continent, subregion, area, population  
            }
        })

        // console.log('///////////////////////////////////////', result);
        
    // })
    // return  await Country.findAll();

    
    // console.log('/////////////////////////////////////', JSON.stringify(result[0]));
// }

// const searchUserByName = async (name)=>{
//     const databaseUser = await User.findAll({where: {name: name}});
//     const apiUserRaw = (await axios.get("https://jsonplaceholder.typicode.com/users")).data; // trae todo de la api

//     const apiUsers = cleanArray(apiUserRaw); 
//     const fiteredApi = apiUsers.filter(user => user.name === name);
//     return [...fiteredApi, ... databaseUser];
// };

// const getCountryByName =  async (name)=> {
//     const dataBaseCountry = await Country.findAll({where: {name: name}});
// }



module.exports = {
    getCountries,
    // getCountryByName
}





// https://restcountries.com/v3/all


// ////////////////////////////MODELO COUNTRIY///////////////////////////////////////

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    imgflag: {
      type : DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    capital: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    subregion: {
      type : DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
    },
    population:{
        type: DataTypes.INTEGER,
    } 
  });
};





////////////////////////////////////////////////////////////handler '/' ////////////////////////////////////////////
let { name } = req.query;
   const countDB = await getCountryByName(name)
   // try {
       //     const countDB = name ? getCountryByName(name) : await getCountries();
       
       // } catch (error) {
           //  res.status(400).send({ message: 'NO llega nada che.' });
           // }
           res.send(countDB);