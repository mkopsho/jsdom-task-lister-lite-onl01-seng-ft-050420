// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
//   - As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')

  taskForm.addEventListener('submit', function (e) {
    let formInputDescription = document.getElementById('new-task-description').value
    let formInputPriority = document.getElementById('new-task-priority').value
    let newTask = '<li>' + formInputDescription + ' <button data-description=' + formInputDescription + '>X</button></li>' // gross
    taskList.innerHTML += newTask
    let savedTask = document.getElementById('tasks').lastChild
    buttonListeners()
    prioritySetter(savedTask, formInputPriority)
    e.preventDefault()
  })

  function buttonListeners() {
    const deleteButtons = document.querySelectorAll('button')
    deleteButtons.forEach((button) => {
      button.addEventListener('click', function (e) {
        const taskToBeDeleted = this.parentElement
        taskToBeDeleted.remove()
        e.preventDefault()
      })
    })
  }

  function prioritySetter(task, priority) {
    if (priority === 'high') {
      task.style.color = 'red'
    } else if (priority === 'medium') {
      task.style.color = 'yellow'
    } else {
      task.style.color = 'green'
    }
  }
})
