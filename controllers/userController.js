import {User} from '../models/userModel.js'
const userCtrl = {}

userCtrl.getAll = async (req, res) =>{
    try {
        let data = await User.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
userCtrl.getById = async (req, res) => {
    try {
        let data = await User.findById(req.params.id)
        res.status(200).json(data)
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: err.message });
    }
}

userCtrl.create = async (req, res) => {
    try {
        let newUser = new User(req.body)
        await newUser.save()
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: err.message });
    }

}

userCtrl.update = async (req, res) => {
    try {
        let data = await User.findByIdAndUpdate(req.params.id, req.body)
        let newUser = new User(req.body)
        await data.save()
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: err.message });
    }

}
userCtrl.delete = async (req, res) => {
    try {
        let data = await User.findByIdAndRemove(req.params.id)
        res.json(data)
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, msg: err.message });
    }

}

export {userCtrl}
