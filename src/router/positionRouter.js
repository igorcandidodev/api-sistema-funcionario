import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const positions = await req.context.databases.Position.findAll();

        if(positions.length === 0) {
            return res.status(404).send({
                status: 404,
                message: 'No positions found'
            });
        }

        res.send(positions);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const position = await req.context.databases.Position.findOne({
            where: {
                id: req.params.id,
            }
        });

        if(position === null) {
            return res.status(404).send({
                status: 404,
                message: 'Position not found'
            });
        }

        res.send(position);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const position = await req.context.databases.Position.create(req.body);
        return res.send(position);
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const position = await req.context.databases.Position.findByPk(req.params.id);
        position.update(req.body);
        res.send(position);
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const position = await req.context.databases.Position.findByPk(req.params.id);
        position.destroy();
        res.sendStatus(204);
    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    } 
});

export default router;