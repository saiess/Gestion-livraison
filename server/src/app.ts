import 'dotenv/config';

import express from 'express';

import './config/DatabaseConfig';

import bodyParser from 'body-parser';
// import userRoutes from './api/routes/UsersRoutes';
import router from './api/routes/userRoutes';
import vehiculeRouter from './api/routes/VehiculeRoutes';
import commandRouter from './api/routes/CommandRoutes';

const app = express();

app.use(bodyParser.json());

//* *** routes *** */
app.use('/user', router);
app.use('/vehicule', vehiculeRouter);
app.use('/command', commandRouter);

//* *** server *** */
app.listen(process.env.PORT, () => {
  console.log(`server is runing on ${process.env.PORT}`);
});
