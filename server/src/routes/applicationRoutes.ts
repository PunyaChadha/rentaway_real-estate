import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { createApplications, listApplications, updateApplicationStatus } from "../controllers/applicationControllers";

const router = express.Router();

router.get("/", authMiddleware(["tenant"]), createApplications);
router.get("/:id/status", authMiddleware(["manager"]), updateApplicationStatus);
router.get("/", authMiddleware(["manager","tenant"]), listApplications);

export default router;