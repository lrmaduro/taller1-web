import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express, { json } from 'express';

const app = express();
app.set('port', 3000);

// middle
app.use(morgan('dev'));
app.use(helmet());
app.use(json());
app.use(
  cors({
    "origin": "*"
  })
);

// routes
app.get('/', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.status(200).send({
    msg: "Server up"
  });
})


export default app;
