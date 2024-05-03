import employeeRouter from "./employeeRouter";
import departmentRouter from "./departmentRouter";
import taskRouter from "./taskRouter";
import supervisorRouter from "./supervisorRouter";
import projectRouter from "./projectRouter";

export const routes = {
  employee: employeeRouter,
  department: departmentRouter,
  task: taskRouter,
  supervisor: supervisorRouter,
  project: projectRouter,
};
