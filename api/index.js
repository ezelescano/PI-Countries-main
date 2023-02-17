//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Country} = require("./src/db");
const axios = require("axios");

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, async () => {

    const allCountriesDB = Country.findAll();
    if(!allCountriesDB.length) {
      const {data} = await axios.get("https://restcountries.com/v3/all");
      const apiCountries = data
      
      var apiCountriesMap = apiCountries.map((elem)=> {
        return {
          id:elem.cca3,
          name: elem.name.common,
          imgflag: elem.flags[0],
          continent: elem.continents[0],
          capital: elem.capital ? elem.capital[0] : "No Data",
          subregion: elem.subregion,
          area: elem.area,
          population: elem.population
        }
      })
      console.log("/////////////////////////////////////////////", apiCountriesMap[0]);
      await Country.bulkCreate(apiCountriesMap);
      const dtabase = await Country.findAll();
      console.log("///////////HECHO///////////", dtabase);   
    }
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
