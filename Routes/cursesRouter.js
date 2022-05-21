import { Router } from "express";

import { getAllCourses, getAllModuleClasses, getAllModules } from "../controllers/cursesController.js";

const cursesRouter = Router();

cursesRouter.get("/curses", getAllCourses);

cursesRouter.get("/curses/:courseId", getAllModules);

cursesRouter.get("/curses/:courseId/:moduleId", getAllModuleClasses);

export default cursesRouter;