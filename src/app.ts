import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(fileUpload());
app.use('/public', express.static('public'));

const firstRouter = (req: Request, res: Response) => {
  const { body, params } = req;
  res.json({
    message: 'Hello World',
  });
};

app.get('/', firstRouter);

app.listen(PORT, () => console.log(`APP IS LISTENING ON ${PORT}`));
