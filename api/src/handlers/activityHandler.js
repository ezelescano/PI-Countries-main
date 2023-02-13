const {createActivity} = require("../controllers/activityControllers");


const createActivityHandler = async (req, res) => {
    const { name, dificulty, duration, season, countryId } = req.body;
    try {
        const newActivity = await createActivity(name, dificulty, duration, season, countryId);
        res.status(200).json(newActivity);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    createActivityHandler
}