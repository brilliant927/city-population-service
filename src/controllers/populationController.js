const { Population } = require('../models');

// Handler for GET Route
exports.getPopulation = async (req, reply) => {
    try {
        const { state, city } = req.params;
        const populationData = await Population.findOne({
            where: {
                state: state.toLowerCase(),
                city: city.toLowerCase()
            }
        });

        if (!populationData) {
            reply.status(400).send({ error: 'State/City combination not found' });
            return;
        }
        reply.status(200).send({ population: populationData.population });
    } catch (err) {
        console.log(err)
        reply.status(500).send({ error: 'Internal Server Error' });
    }
};

// Handler for PUT Route
exports.updatePopulation = async (req, reply) => {
    try {
        const { state, city } = req.params;
        const newPopulation = parseInt(req.body);
        if (isNaN(newPopulation)) {
            reply.status(400).send({ error: 'Invalid population data' });
            return;
        }

        const [updated] = await Population.update({ population: newPopulation }, {
            where: { state: state.toLowerCase(), city: city.toLowerCase() }
        });

        if (updated) {
            reply.status(200).send({ message: 'Population updated' });
        } else {
            const newEntry = await Population.create({
                state: state.toLowerCase(),
                city: city.toLowerCase(),
                population: newPopulation
            });
            if (newEntry) {
                reply.status(201).send({ message: 'Population added' });
            } else {
                reply.status(400).send({ error: 'Failed to add population data' });
            }
        }
    } catch (err) {
        reply.status(500).send({ error: 'Internal Server Error' });
    }
};
