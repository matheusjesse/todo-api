import express, { Request, Response } from 'express';
import loginRouter from './routers/loginRouter';
import todoRouter from './routers/todoRouter';

const app = express();

app.use(express.json());

const PORT = 8000;

app.use('/login', loginRouter);
app.use('/todos', todoRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default app;
