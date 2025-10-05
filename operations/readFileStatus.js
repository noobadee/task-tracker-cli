import { readFile } from '../operations/readFile.js';

export function readFileStatus(status, heading) {
  let responseText = `--------------------\n\t${heading}\n--------------------\n`;

  try {
    // Read the file
    let data = readFile();

    // Handle error (for listing all tasks)
    if (data.length === 0) { return 'There are no tasks.\nPlease create a task first using the \'add\' command.'; }
    
    // Filter tasks by todo, in-progress, done, or any (!status)
    // Get all tasks' id and description
    let isEmpty = true;
    data.forEach( (task) => { 
      if (!status || task.status === status) { 
        responseText += `${task.id}: ${task.description}\n`;  
        isEmpty = false;
      }
    })            

    // Handle error (for empty tasks)
    if (isEmpty) { return `There are currently no ${status} tasks.`; }

  } catch (err) { return `Failed to list tasks: ${err.message}`; }

  return responseText;
}