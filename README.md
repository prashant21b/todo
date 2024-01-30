## To-Do List Application
 ## Introduction
   This To-Do List application allows users to manage their tasks efficiently. Users can create, view, edit, mark as completed, and delete tasks. The application is built using Node.js, Express.js, and MongoDB for data persistence. It includes validation to ensure task titles are not empty and error handling for graceful application behavior
## How to Start the Application

  ## Clone the Repository:
     git clone https://github.com/prashant21b/todo.git
  ## Install Dependencies:
     cd todo
     
     npm install
  ## Set Up Environment Variables:
  Create a .env file in the root directory and specify the following variables:

     PORT=4000
     MONGO_URI=<your-mongodb-connection-string>
  ## Start the Server:
    npm start
  ## Access the Application:
  Open your postman/thunder-client and navigate to http://localhost:4000 to access the To-Do List application.

  ## Code Structure
    models/: Contains the Mongoose schemas and models for tasks.
    controllers/: Contains the logic for handling HTTP requests and responses.
    routes/: Defines the routes for different endpoints of the application.
    config/: Contains connection from mngodb database.
   
## To-Do List Application API Endpoints
 # Create Task
 Method: POST
 
 Endpoint: /api/v1/create
 
 Description: Create a new task with a title and description.
 
 Request Body: 
title: String (required) - Title of the task.
description: String - Description of the task.

Response:
Status: 201 Created
Body: JSON object representing the created task.

 # Get All Tasks
 
 Method: GET
 
 Endpoint: /api/v1/getTask
 
 Description: Retrieve a list of all tasks.
 
 Response:
 Status: 200 OK
 Body: JSON array containing all tasks.
 
# Mark Task as Completed
 Method: POST
 
 Endpoint: /api/v1/complete/:id
 
 Description: Mark a task as completed.
 
 URL Parameters:
 id: String (required) - ID of the task to mark as completed.

 Response:
 Status: 200 OK
 Body: JSON object representing the updated task.
 
 # Delete Task
 
 Method: POST
 
 Endpoint: /api/v1/delete/:id
 
 Description: Delete a task.
 
 URL Parameters:
 id: String (required) - ID of the task to delete.
 
 Response:
 Status: 200 OK
 Body: JSON object representing the deleted task.
 
 # Edit Task
 Method: POST
 
 Endpoint: /api/v1/edit/:id

 Description: Edit the details of a task.
 
 URL Parameters:
 id: String (required) - ID of the task to edit.
 
 Request Body:
 title: String - New title of the task.
 description: String - New description of the task.
 dueDate: Date - New due date of the task.
 workStatus: String - New work status of the task (e.g., 'completed', 'progress').
 categories: Array - New categories of the task.
 Response:
 Status: 200 OK
 Body: JSON object representing the updated task.
