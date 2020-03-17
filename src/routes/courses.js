import { Router } from "express";
import {
  COURSE_PATH,
  SECTIONS_PATH,
  SECTION_PATH,
  LECTURES_PATH,
  LECTURE_PATH
} from "../constants";
import {
  createCourse,
  getCourse,
  getCourses,
  updateCourse,
  updateCourses,
  deleteCourse,
  deleteCourses
} from "../controllers/routeControllers/courses";

const router = Router();

router
  .route("/")
  .get(getCourses)
  .post(createCourse)
  .patch(updateCourses)
  .delete(deleteCourses);

router
  .route(COURSE_PATH)
  .get(getCourse)
  .patch(updateCourse)
  .delete(deleteCourse);

router
  .route(SECTIONS_PATH)
  .get()
  .post()
  .delete();

router
  .route(SECTION_PATH)
  .get()
  .patch()
  .delete();

router
  .route(LECTURES_PATH)
  .get()
  .post()
  .delete();

router
  .route(LECTURE_PATH)
  .get()
  .patch()
  .delete();

export default router;
