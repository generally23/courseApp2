import { captureAsyncError } from "../errorControllers/captureAsyncErrors";
import Course from "../../models/courses";

export const createCourse = captureAsyncError(async (req, res, next) => {
  const newCourse = await Course.create(req.body);
  res.status(201).json(newCourse);
});

export const getCourses = captureAsyncError(async (req, res, next) => {
  console.log(req.query);
  const courseQueryObject = Course.find();

  const courses = await courseQueryObject;
  res.json(courses);
});

export const updateCourses = captureAsyncError(async (req, res, next) => {});

export const deleteCourses = captureAsyncError(async (req, res, next) => {
  await Course.deleteMany();
  res.status(204).json();
});

export const getCourse = captureAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  res.json(course);
});

export const updateCourse = captureAsyncError(async (req, res, next) => {
  const course = await Course.findById(req.params.courseId);
  const {
    name,
    description,
    objectives,
    requirements,
    prerequisites,
    price
  } = req.body;

  const fieldNames = Object.keys({
    name,
    objectives,
    requirements,
    description,
    price,
    prerequisites
  }).filter(key => key);

  fieldNames.forEach(fieldname => (course[fieldname] = req.body[fieldname]));
  await course.save();
  res.json(course);
});

export const deleteCourse = captureAsyncError(async (req, res, next) => {
  await Course.deleteOne({ _id: req.params.courseId });
  res.status(204).json();
});
