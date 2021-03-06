import express from 'express';
import rotas from './rotas';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());

app.use(express.json());

app.use(rotas);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);
console.log("###################");
console.log("#### SERVER ON ####");
console.log("###################");