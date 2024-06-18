import express from "express"
import { getWelcome } from "../controller/welcomeController.js"

const router = express.Router();

router.get('/', getWelcome);

export default router;