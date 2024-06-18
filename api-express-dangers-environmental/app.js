import express, { response } from 'express';
import cors from 'cors';
import calamitysRoutes from "./routes/calamitysRoutes.js"
import statesRoutes from "./routes/statesRoutes.js"
import welcomeRoutes from "./routes/welcomeRoutes.js"

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// segurança: desativando cabeçalho x-powered-by
app.disable('x-powered-by');

// rota de API com roteamento basico
app.use('/', welcomeRoutes);

app.use('/api', statesRoutes);
app.use('/api', calamitysRoutes);

// iniciando servidor    
app.listen(port, () => console.log('server on'))