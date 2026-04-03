import express from "express";
import { getUsers, updateUserStatus } from "../controllers/user.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { allowRoles } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", protect, allowRoles("admin"), getUsers);
router.patch("/:id/status", protect, allowRoles("admin"), updateUserStatus);

export default router;
