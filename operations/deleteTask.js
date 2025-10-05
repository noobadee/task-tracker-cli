import fs from 'node:fs';
import { filePath } from '../db/path.js';
import { readFile } from '../operations/readFile.js';

export function deleteTask(command) {
  try {
    // Read the file
    let data = readFile();
    
    // Get the id from the input command
    const id = Number(command.split(' ').at(-1));

    // Handle errors
    if (!data.find(task => task.id === id)) {
      return 'Failed to remove a task.\nPlease make sure the specified id exists.'
    }

    // Remove the task by id
    data.splice(data.findIndex(task => task.id === id), 1);

    // Rewrite the file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  } catch (err) { return `Failed to delete a task: ${err.message}`; }

  return 'Successfully deleted a task.'; 
}