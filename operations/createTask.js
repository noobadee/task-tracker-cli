import fs from 'node:fs';
import { filePath } from '../db/path.js';
import { readFile } from '../operations/readFile.js';

export function createTask(command) {
  try {
    // Read the file
    let data = readFile();

    // Get the task description from input command
    let task = '';
    for (let i = 0; i < command.length; i++) {
      if (command[i] === '"') {
        task = command.slice(i + 1, command.length - 1);
        break;
      }
    }

    // Rewrite the file with new added content
    data.push({ 
      id: data.length === 0 ? 1 : Math.max(...data.map(task => task.id)) + 1, // Generate unique id 
      description: task, 
      status: 'todo', 
      createdAt: new Date().toLocaleDateString(), 
      updatedAt: new Date().toLocaleDateString() 
    });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  } catch (err) { return `Failed to create a task: ${err.message}`; }

  return 'Successfully created a new task.';
}