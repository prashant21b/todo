const express=require('express')
const { createTask, getAllTask, markTaskAsComplited, deleteTask, editTask } = require('../controllers/task.controller')

const router=express.Router()

router.post('/create',createTask)
router.get('/getTask',getAllTask)
router.post('/complete/:id',markTaskAsComplited)
router.post('/delete/:id',deleteTask)
router.post('/edit/:id',editTask)

module.exports=router