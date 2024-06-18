import express from "express"
import { addCalamity, deleteCalamityById, getCalamity, getCalamityById, updateCalamity } from "../controller/calamitysController.js";


const router = express.Router();

router.get('/calamidades', getCalamity);
router.post('/calamidades/', addCalamity);
router.get('/calamidades/:sigla', getCalamityById);
router.put('/calamidades/:sigla', updateCalamity);
router.delete('/calamidades/:sigla', deleteCalamityById);

export default router;