import express from 'express';
import mongoose from 'mongoose';
import {route} from './routes/user.js';
const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://username:VrVzR42NTiQRV3C@cluster0.sgeqe.mongodb.net/simple_crud?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    }).then( () => { console.log('Connected to Database') },
       err => { console.log(err) }
  );

  app.use(express.json());
//Routes
app.use('/user', route);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));