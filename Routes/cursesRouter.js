import { Router } from "express";

import { getAllCourses, getAllModuleClasses, getAllModules } from "../controllers/cursesController.js";

const cursesRouter = Router();

cursesRouter.get("/curses", getAllCourses);

cursesRouter.get("/curses/:curseId", getAllModules);

cursesRouter.get("/curses/:curseId/:moduleId", getAllModuleClasses);

export default cursesRouter;