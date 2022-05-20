import { Router } from "express";

import { getAllCourses } from "../controllers/cursesController.js";

const cursesRouter = Router();

cursesRouter.get("/curses", getAllCourses);

export default cursesRouter;