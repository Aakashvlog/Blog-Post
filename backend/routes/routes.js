const express = require('express');
const router = express.Router();

const {
    updateTask,
    deleteTask,
    createTask,
    getAllTask,
    login,
    signup, 
    getATask
} = require('../controllers/task');

router.post('/getAllTask',getAllTask);
router.post('/createTask',createTask);
router.post('/login',login);
router.post('/signup',signup);
router.post('/deleteTask',deleteTask);
router.post('/updateTask',updateTask);
router.post('/getATask', getATask);

module.exports = router;