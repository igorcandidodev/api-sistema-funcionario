import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const employees = await req.context.databases.Employee.findAll();

        if(employees.length === 0) {
            return res.status(404).send({
                status: 404,
                message: 'No employees found'
            });
        }

        res.send(employees);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
    
});

router.get('/:id', async (req, res) => {

    try {

        const employee = await req.context.databases.Employee.findOne({
            where: {
                id: req.params.id,
            }
        });

        if(employee === null) {
            return res.status(404).send({
                status: 404,
                message: 'Employee not found'
            });
        }

        res.send(employee);

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }

});

router.post('/', async (req, res) => {
    try {

        const employee = await req.context.databases.Employee.create(req.body);

        return res.send(employee);

    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    }
});

router.put('/:id', async (req, res) => {

    try {
        const employee = await req.context.databases.Employee.findByPk(req.params.id);

        employee.update(req.body);

        res.send(employee);
    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        });
    }
    
});

router.delete('/:id', async (req, res) => {

    try {
        const employee = await req.context.databases.Employee.findByPk(req.params.id);
        employee.destroy();

        res.sendStatus(204);

    } catch (err) {
        res.status(400).send({
            status: 400,
            message: err.message
        });
    } 
});


export default router;