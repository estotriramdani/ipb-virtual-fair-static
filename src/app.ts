import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';
import { pricingCareer, pricingScholarship } from './data/pricing';
import { headersMiddleware } from './middlewares';

dotenv.config();

const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(fileUpload());
app.use('/public', express.static('public'));

app.get('/api/pricing', (req: Request, res: Response) => {
  res.json({
    career: pricingCareer,
    scholarship: pricingScholarship,
  });
});

app.listen(PORT, () => console.log(`APP IS LISTENING ON ${PORT}`));
