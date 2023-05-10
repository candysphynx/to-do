import { useState } from 'react'
import './App.css'
import Task from './Task.jsx';

function App() {

  const [taskList, setTaskList] = useState([]);
  const [newTask, setnewTask] = useState([]);

  function New(e) {
    setnewTask(e.target.value);  
  }
  
  const RenderTaskList = () =>{
    return taskList.map((item,key) => {
      return (
        <div>
        <Task item={item} key={key}/>
        <button onClick={RemoveTask}>Supprimer</button>
        </div>
      )
    })
  }

  const RemoveTask = (remove) => {
    const updateTaskList = taskList.filter((Task) => {
      return Task !== remove 
    });
    console.log(updateTaskList);
  }

  const AddTask = () => {
    setTaskList(taskList => [newTask, ...taskList]);
    console.log(taskList);
  }
  return (
    <div>
      <h1>Ma liste de tâches</h1>

    <input onChange={New} placeholder="Entrez votre tâche" />

    <br></br>
    <br></br>

    <button onClick={AddTask}>Ajouter</button>

    <h2>Tâches :</h2>
    {RenderTaskList()}
    </div>
  )
}

export default App