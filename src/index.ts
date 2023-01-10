import express, { Request, Response } from 'express';
import loginRouter from './routers/loginRouter';
import todoRouter from './routers/todoRouter';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.APP_PORT;

app.use('/login', loginRouter);
app.use('/todos', todoRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
