import express, { Request, Response } from 'express';
import loginRouter from './routers/loginRouter';

const app = express();

app.use(express.json());

const PORT = 8000;

app.use('/login', loginRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
