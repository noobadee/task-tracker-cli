import { rl } from './readline.js';
import { processInput }  from './process.js';

(function prompt() {
    rl.question('\ntask-tracker-cli:$ ', command => {
      // Terminate if command = exit
      if (command === 'exit') { rl.close(); } 

      // Process
      else {
        const response = processInput(command); // process
        console.log(response); // output    
          
        prompt(); // loop terminal
      }
    });
}())
