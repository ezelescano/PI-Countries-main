const { getCountries, getCountryByName, countryIdController } = require("../controllers/countryController");



const getCountriesHandler = async (req, res) => {
   const { name } = req.query;
   if (!name) {
      try {
         
       console.log("mauro cosologuea countDB")
         const allCountry = await getCountries();
         res.status(200).json(allCountry);
      } catch (error) {
         res.status(400).json({ error: 'The country you requested was not found' });
      }
   } else {
      try {
         const oneCountry = await getCountryByName(name);
         res.status(200).json(oneCountry)
      } catch (error) {
         res.status(404).json({ error: 'Country not found' });
      }
   }
};


const countryIdHandler = async (req, res) => {
   const { id } = req.params;
   try {
      const countId = await countryIdController(id);
      res.status(200).json(countId);
   } catch (error) {
      res.status(400).json({error:error.message});
   }
}


module.exports = { getCountriesHandler, countryIdHandler };

// obtener el listado de paises