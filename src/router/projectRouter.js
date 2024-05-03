import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const project = await req.context.databases.Project.findAll();
  
      if (project.length === 0) {
        return res.status(404).send({
          status: 404,
          message: "No projects found.",
        });
      }
  
      res.send(project);
    } catch (err) {
      res.status(500).send({
        status: 500,
        message: err.message,
      });
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const project = await req.context.databases.Project.findOne({
        where: {
          id: req.params.id,
        },
      });
  
      if (project === null) {
        return res.status(404).send({
          status: 404,
          message: "Project not found.",
        });
      }
  
      res.send(project);
    } catch (err) {
      res.status(500).send({
        status: 500,
        message: err.message,
      });
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const project = await req.context.databases.Project.create(req.body);
  
      return res.send(project);
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: err.message,
      });
    }
  });
  
  router.put("/:id", async (req, res) => {
    try {
      const project = await req.context.databases.Project.findByPk(
        req.params.id
      );
  
      project.update(req.body);
  
      res.send(project);
    } catch (err) {
      res.status(500).send({
        status: 500,
        message: err.message,
      });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const project = await req.context.databases.Project.findByPk(
        req.params.id
      );
      project.destroy();
  
      res.sendStatus(204);
    } catch (err) {
      res.status(400).send({
        status: 400,
        message: err.message,
      });
    }
  });
  
  export default router;
  