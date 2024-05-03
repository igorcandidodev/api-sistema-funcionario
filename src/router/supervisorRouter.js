import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const supervisor = await req.context.databases.Supervisor.findAll();

        if(supervisor.length === 0) {
            return res.status(404).send({
                status: 404,
                message: 'No supervisor found'
            });
        }

        res.send(supervisor);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
    
});

router.get('/:id', async (req, res) => {

    try {

        const supervisor = await req.context.databases.Supervisor.findOne({
            where: {
                id: req.params.id,
            }
        });

        if(supervisor === null) {
            return res.status(404).send({
                status: 404,
                message: 'Supervisor not found'
            });
        }

        res.send(supervisor);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }

});

router.post("/", async (req, res) => {
  try {
    const supervisor = await req.context.databases.Supervisor.create(req.body);
    return res.status(201).send(supervisor);
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});



router.put('/:id', async (req, res) => {

    try {
        const supervisor = await req.context.databases.Supervisor.findByPk(req.params.id);

        supervisor.update(req.body);

        res.send(supervisor);
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
    
});

router.delete('/:id', async (req, res) => {

    try {
        const supervisor = await req.context.databases.Supervisor.findByPk(req.params.id);
        supervisor.destroy();

        res.sendStatus(204);

    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    } 
});


export default router;