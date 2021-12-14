import express from 'express';
import {userCtrl} from '../controllers/userController.js';
const route = express.Router();

route.get('/allUsers', userCtrl.getAll)
route.get('/:id', userCtrl.getById)
route.post('/create', userCtrl.create)
route.put('/edit/:id', userCtrl.update)
route.delete('/delete/:id', userCtrl.delete)

export {route}
