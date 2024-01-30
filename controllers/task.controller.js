
const Task  = require('../models/task.models')


exports.createTask = async (req, res) => {
    try {
        console.log(req.body)
        const { title, description, dueDate, categories } = req.body;

    
        if (!title) {
            return res.status(400).json({
                 sucess:false,
                 message: 'Title is required'
                 });
        }

        
        const newTask = new Task({
            title,
            description,
            dueDate,
            categories
        });

        const savedTask = await newTask.save();

        
        res.status(201).json({
            sucess:true,
            message:"New task created sucessfully",
            data:savedTask,
        });
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ 
            sucess:false,
            message: 'Internal server error' 
        });
    }
}

exports.getAllTask=async(req,res)=>{
    try{
        const tasks=await Task.find();
        res.status(201).json({
            sucess:true,
            message:"All the tasks get sucessfully",
            data:tasks
        })

    }
    catch(error){
        console.log("Error in fetching all the task",error)
        res.status(500).json({
            sucess:false,
            message:"Internal server error",
        })
    }
}


exports.markTaskAsComplited=async(req,res)=>{
    try{
        const taskId=req.params.id
         const task=await Task.findById(taskId)

         if(!task){
            return res.status(404).json({
                sucess:false,
                message:"Task is not found with provided id",
            })
         }
         if(task.workStatus=='completed'){
            return res.status(400).json({
                sucess:false,
                message:"Task is already competed"
            })
         }
        task.workStatus='completed'
        await task.save()
         res.status(201).json({
            sucess:true,
            message:"Task completed sucessfully",
            data:task
         })

    }
    catch(error){
        console.log("Error in changing status of task",error)
        res.status(500).json({
            sucess:false,
            message:"Internal server error",
        })
    }
}


exports.deleteTask=async (req,res)=>{
    try{
        const taskId=req.params.id
        const task=await Task.findById(taskId)
        if(!task){
            return res.status(404).json({
                sucesss:false,
                message:"Task is not available with provided id",
            })
        }
        await Task.findByIdAndDelete(taskId);

        return res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            data: task
        });


    }
    catch(error){
        console.log("Error in deleting the task",error)
        res.status(500).json({
            sucess:false,
            message:"Internal server error",
        })
    }
}


exports.editTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, dueDate, workStatus, categories } = req.body;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found with provided id",
            });
        }

        
        if (title) task.title = title;
        if (description) task.description = description;
        if (dueDate) task.dueDate = dueDate;
        if(workStatus && task.workStatus=='completed'){
            return res.status(202).json({
                sucess:false,
                message:"Task is already competed you can not change its status",
            })
        }
        if (workStatus && task.workStatus!='completed') task.workStatus = workStatus;
        
        if (categories) task.categories = categories;

        
        const updatedTask = await task.save();

        return res.status(200).json({
            success: true,
            message: "Task details updated successfully",
            data: updatedTask
        });
    } catch (error) {
        console.error("Error editing task:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};