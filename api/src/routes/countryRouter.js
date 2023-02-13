const { getCountriesHandler, countryIdHandler } = require("../handlers/countryHandler");

const { Router } = require('express');

const countryRouter = Router();

countryRouter.get("/", getCountriesHandler);

countryRouter.get("/:id", countryIdHandler);

// countryRouter.get("..?name", (req, res) => {
//     res.status(200).send("NIY: ESTA RUTA TRAE LOS PAISES POR NOMBRE");
// });

module.exports = countryRouter;