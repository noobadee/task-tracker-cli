import fs from 'node:fs';
import { filePath } from '../db/path.js';
import { readFile } from '../operations/readFile.js';

export function markTask(command) {
  let status = '';

  try {
    // Read the file
    let data = readFile();
  
    // Get the status from input command
    status = command.split(' ')[1];
  
    // Get the id from the input command
    const id = Number(command.split(' ').at(-1));
    
    // Find task by id
    const task = data.find(task => task.id === id);

    // Handle errors (for id)
    if (!task) { return 'Failed to mark a task.\nPlease make sure the specified id exists.' }
  
    // Update the status and updated at
    task.status = status;
    task.updatedAt = new Date().toLocaleDateString();
  
    // Rewrite the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  } catch (err) { return `Failed to mark a task: ${err.message}`; }

  return `Successfully marked the task as ${status}.`
}