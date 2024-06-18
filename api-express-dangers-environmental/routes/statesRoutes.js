import express from "express"
import { addState, deleteStateById, getState, getStateById, updateState } from "../controller/statesController.js";

const router = express.Router();

router.get('/estados', getState);
router.post('/estados/', addState);
router.get('/estados/:sigla', getStateById);
router.put('/estados/:sigla', updateState);
router.delete('/estados/:sigla', deleteStateById);

export default router;