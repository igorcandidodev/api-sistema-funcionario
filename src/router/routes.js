import employeeRouter from "./employeeRouter";
import departmentRouter from "./departmentRouter";
import taskRouter from "./taskRouter";

export const routes = {
  employee: employeeRouter,
  department: departmentRouter,
  task: taskRouter,
};
