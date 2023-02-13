const {Activity} = require("../db");



const createActivity = async ( name, dificulty, duration, season, countryId) => {
    
    const newCountryActivity = await Activity.create({name, dificulty, duration, season});
    await newCountryActivity.addCountry(countryId);
    return newCountryActivity; 
};




module.exports= {
    createActivity
}