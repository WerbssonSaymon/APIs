import express, { Application } from "express";
import veiculoRoutes from "./src/routes/veiculoRoutes";

const app: Application = express();

app.use(express.json());

app.use('/api', veiculoRoutes);

export default app;