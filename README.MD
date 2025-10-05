# Task Tracker CLI

A simple and efficient command-line interface (CLI) application for managing your tasks. Built with Node.js, this tool helps you track your to-do items, mark progress, and completed tasks.

## Features

- ✅ **Create tasks** - Add new tasks with descriptions
- 📝 **Update tasks** - Modify existing task descriptions
- 🗑️ **Delete tasks** - Remove tasks you no longer need
- 🔄 **Mark status** - Track task progress (todo, in-progress, done)
- 📋 **List tasks** - View all tasks or filter by status
- 💾 **Persistent storage** - Tasks are saved in JSON format
- 🎯 **Unique IDs** - Immutable task identifiers

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)

## Installation

Clone or download this repository:
```bash
git clone <your-repo-url>
cd task-tracker-cli
```

## Usage

Start the application:
```bash
node app.js
```

You'll see the interactive prompt:
```
task-tracker-cli:$
```

### Available Commands

#### Add a Task
Create a new task with a description (must be in quotes):
```bash
add "Buy groceries"
add "Complete project documentation"
```

#### List Tasks
View all tasks:
```bash
list
```

Filter tasks by status:
```bash
list todo          # Show only pending tasks
list in-progress   # Show tasks in progress
list done          # Show completed tasks
```

#### Update a Task
Modify a task's description by its ID:
```bash
update 1 "Buy groceries and cook dinner"
update 3 "Complete project documentation and review"
```

#### Mark Task Status
Change a task's status:
```bash
mark in-progress 1   # Mark task 1 as in-progress
mark done 2          # Mark task 2 as completed
mark todo 3          # Mark task 3 as todo
```

Available statuses: `todo`, `in-progress`, `done`

#### Delete a Task
Remove a task by its ID:
```bash
remove 1
remove 5
```

#### Exit
Quit the application:
```bash
exit
```

## Example Session

```bash
task-tracker-cli:$ add "Buy groceries"
Successfully created a new task.

task-tracker-cli:$ add "Feed the cat"
Successfully created a new task.

task-tracker-cli:$ list
--------------------
  ALL
--------------------
1: Buy groceries
2: Feed the cat

task-tracker-cli:$ mark in-progress 1
Successfully marked the task as in-progress.

task-tracker-cli:$ update 1 "Buy groceries and make lunch"
Successfully updated the task.

task-tracker-cli:$ list in-progress
--------------------
	IN-PROGRESS
--------------------
1: Buy groceries and make lunch

task-tracker-cli:$ mark done 1
Successfully marked the task as done.

task-tracker-cli:$ exit
```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

ISC

## Author

Built by a nobody
