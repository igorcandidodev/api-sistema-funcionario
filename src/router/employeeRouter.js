import { Router } from "express";

const router = Router();

router.get('/', async (req, res) => {

    try {
        const employees = await req.context.databases.Employee.findAll({
            include: [
                req.context.databases.Department,
                req.context.databases.Position,
                req.context.databases.Supervisor,
                req.context.databases.Task,
            ]
        });

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

router.post('/:departmentId/:positionId/:supervisorId', async (req, res) => {
    try {

        const employee = await req.context.databases.Employee.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            cpf: req.body.cpf,
            password: req.body.password,
            departmentId: req.params.departmentId,
            positionId: req.params.positionId,
            supervisorId: req.params.supervisorId
        });

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