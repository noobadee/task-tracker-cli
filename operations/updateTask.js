import fs from 'node:fs';
import { filePath } from '../db/path.js';
import { readFile } from '../operations/readFile.js';

export function updateTask(command) {
  try {
    // Read the file
    let data = readFile();
  
    // Get the id from the input command
    const id = Number(command.split(' ')[1]);
  
    // Get the task description from input command
    let newTaskName = '';
    for (let i = 0; i < command.length; i++) {
      if (command[i] === '"') {
        newTaskName = command.slice(i + 1, command.length - 1);
        break;
      }
    }
    
    // Find task by id
    const task = data.find(task => task.id === id);

    // Handle errors
    if (!task) { return 'Failed to update a task.\nPlease make sure the specified id exists.' }
  
    // Update the task name and updated at
    task.description = newTaskName;
    task.updatedAt = new Date().toLocaleDateString();

    // Rewrite the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  } catch (err) { return `Failed to update a task: ${err.message}`; }

  return 'Successfully updated the task.'; 
}