import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './config/database.js';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  const codespaceName = process.env.CODESPACE_NAME;
  req.app.locals.apiBaseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
  next();
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`OctoFit backend listening on port ${port}`);
});
