import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const department = await req.context.databases.Department.findAll();

    if (department.length === 0) {
      return res.status(404).send({
        status: 404,
        message: "No departments found.",
      });
    }

    res.send(department);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const department = await req.context.databases.Department.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (department === null) {
      return res.status(404).send({
        status: 404,
        message: "Department not found.",
      });
    }

    res.send(department);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const department = await req.context.databases.Department.create(req.body);

    return res.send(department);
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const department = await req.context.databases.Department.findByPk(
      req.params.id
    );

    department.update(req.body);

    res.send(department);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const department = await req.context.databases.Department.findByPk(
      req.params.id
    );
    department.destroy();

    res.sendStatus(204);
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});

export default router;
