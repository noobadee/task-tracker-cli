import { readFileStatus } from './operations/readFileStatus.js';
import { createTask } from './operations/createTask.js';
import { updateTask } from './operations/updateTask.js';
import { deleteTask } from './operations/deleteTask.js';
import { markTask } from './operations/markTask.js';

// Process input and return an output based on command
export function processInput(input) {
  let command = input.trim(); 
  
  // Ensures command starts and ends with the word 'list' (e.g. list)
  if (/^list$/.test(command)) { return readFileStatus('', 'ALL'); }

  // Ensures command (e.g. list todo)
  //    starts with the word 'list'
  //    followed by a single whitespace ' '
  //    ends with the word 'todo'
  if (/^list\stodo$/.test(command)) { return readFileStatus('todo', 'TO DO'); }

  // Ensures command (e.g. list in-progress)
  //    starts with the word 'list'
  //    followed by a single whitespace ' '
  //    ends with the word 'in-progress'
  if (/^list\sin-progress$/.test(command)) { return readFileStatus('in-progress', 'IN-PROGRESS'); }

  // Ensures command (e.g. list done)
  //    starts with the word 'list'
  //    followed by a single whitespace ' '
  //    ends with the word 'done'
  if (/^list\sdone$/.test(command)) { return readFileStatus('done', 'COMPLETED'); }

  // Ensures command (e.g. add "Example task")
  //    starts with the word 'add'
  //    followed by a single whitespace ' '
  //    followed by a double quotation mark '"'
  //    followed by a sequence of characters 'Example task'
  //    ends with a double quotation mark '"'
  if (/^add\s".+"$/.test(command)) { return createTask(command); }

  // Ensures command (e.g. update 10 "Updated task name")
  //    starts with the word 'update'
  //    followed by a single whitespace ' '
  //    followed by a sequence of digits '[0-9]'
  //    followed by a single whitespace ' '
  //    followed by a double quotation mark '"'
  //    followed by a sequence of characters 'Updated task name'
  //    ends with a double quotation mark '"'
  if (/^update\s\d+\s".+"$/.test(command)) { return updateTask(command); }

  // Ensures command (e.g. remove 3)
  //    starts with the word 'remove'
  //    followed by a single whitespace ' '
  //    ends with a sequence of digits '[0-9]'
  if (/^remove\s\d+$/.test(command)) { return deleteTask(command); }

  // Ensures command (e.g. mark done 4)
  //    starts with the word 'mark'
  //    followed by a single whitespace ' '
  //    followed by a sequence of characters that can only be in any of these (todo, in-progress, done)
  //    ends with a sequece of digits '[0-9]'
  if (/^mark\s(todo|in-progress|done)\s\d+$/.test(command)) { return markTask(command); }

  // Else
  return 'Command does not exists.'
}