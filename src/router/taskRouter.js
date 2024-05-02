import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const task = await req.context.databases.Task.findAll();

    if (task.length === 0) {
      return res.status(404).send({
        status: 404,
        message: "No tasks found.",
      });
    }

    res.send(task);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const task = await req.context.databases.Task.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (task === null) {
      return res.status(404).send({
        status: 404,
        message: "Task not found.",
      });
    }

    res.send(task);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const task = await req.context.databases.Task.create(req.body);

    return res.send(task);
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const task = await req.context.databases.Task.findByPk(
      req.params.id
    );

    task.update(req.body);

    res.send(task);
  } catch (err) {
    res.status(500).send({
      status: 500,
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const task = await req.context.databases.Task.findByPk(
      req.params.id
    );
    task.destroy();

    res.sendStatus(204);
  } catch (err) {
    res.status(400).send({
      status: 400,
      message: err.message,
    });
  }
});

export default router;
