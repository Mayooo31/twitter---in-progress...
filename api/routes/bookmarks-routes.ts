import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import { addToBookmarks, removeFromBookmarks } from "../controllers/bookmarksController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.put("/add/:tweetId", addToBookmarks);
router.put("/remove/:tweetId", removeFromBookmarks);

export default router;
