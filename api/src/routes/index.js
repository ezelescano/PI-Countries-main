const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRouter");
const activityRouter = require("./activitiesRouter");

const router = Router();

router.use("/countries", countryRouter);

router.use("/activities", activityRouter);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
