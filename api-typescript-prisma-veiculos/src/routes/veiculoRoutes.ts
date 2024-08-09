import express from "express";
import { createVeiculo, deleteByIdVeiculos, getByIdVeiculos, getVeiculos, updateByIdVeiculo } from "../controllers/veiculoController";


const router = express.Router();

router.post("/veiculos", createVeiculo);
router.get("/veiculos", getVeiculos);
router.get("/veiculos/:id", getByIdVeiculos)
router.delete("/veiculos/:id", deleteByIdVeiculos)
router.put("/veiculos/:id", updateByIdVeiculo)

export default router;

