// Arrays to keep track of each task's state


// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title : title,
    description : description,
    complete: false,
  logState: function() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },
  markCompleted: function(){
    this.complete = true;
  }
}
  return task;
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`



// DRIVER CODE BELOW

const task1  = newTask('Clean cat litter', 'Take all the shit out of the litter box')
const task2 = newTask('Do laundry', 'stop smelling like shit')
const task = [task1,task2]

console.log(task)

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1
//
task1.logState();
task1.markCompleted();
task1.logState();
