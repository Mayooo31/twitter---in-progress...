import express from "express";
// Middleware
import { checkAuth } from "../middleware/check-auth";
// controllers
import { createTweet } from "../controllers/tweetController";

const router = express.Router();

// Middleware
router.use(checkAuth);

// routes
router.post("/create", createTweet);

export default router;
