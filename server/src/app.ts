import express from 'express';

import mongoose from 'mongoose';

// import cors from 'cors';

import UserModel from './api/models/Users';

const app = express();
mongoose.connect('mongodb+srv://sai:sai@gestion.jz5kd.mongodb.net/livraison?retryWrites=true&w=majority');

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err: any, result: any) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3001, () => {
  console.log('server is runing');
});
