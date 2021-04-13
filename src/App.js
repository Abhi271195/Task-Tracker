import { useState, useEffect } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks.js"
import AddTask from "./components/AddTask.js"
function App() {
  const [showAddTask, setShowAddTask]= useState(false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctors Appointment",
    day: "Feb 23rd at 5pm",
    reminder: true,
},
{
    id: 2,
    text: "Meeting with Clients",
    day: "Feb 24rd at 10am",
    reminder: true,  
},
{
    id: 3,
    
    text: "Food Shopping",
    day: "Feb 23rd at 2:30pm",
    reminder: false,
}

  ])
  

// Add Task

const addTask = (task) => {
const id = Math.floor(Math.random()*1000) + 1
const newTask = { id, ...task}
setTasks([...tasks, newTask])
}

// delete task

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id!== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder} : task))
}
  return (
    
    <div className="container ">
      <Header  onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ? ( <Tasks  tasks = {tasks} onDelete= {deleteTask} onToggle = {toggleReminder} />
      ) : ( "No task to show")}
      
    </div>
  );
}

export default App;
