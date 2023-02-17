const {Activity, Country} = require("../db");



const createActivity = async ( name, dificulty, duration, season, countryId) => {
    console.log("actiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", name, dificulty, duration, season, countryId)
    const newCountryActivity = await Activity.create({name, dificulty, duration, season});
    await newCountryActivity.addCountry(countryId);
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", newCountryActivity)
    return newCountryActivity; 
};

const getActivities =  async ()=> {
    const allActivities  = await Activity.findAll({
        include: [{
            model: Country,
            atributes: ["name"],
            throught: {
                atributes: []
            }
        }]
        })
        return allActivities;
}



module.exports= {
    createActivity,
    getActivities
}