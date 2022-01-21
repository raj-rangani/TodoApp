import './App.css';
import TodoList from './components/TodoList'
import React, {useState} from 'react'
import InputForm from './components/inputForm'

function App() {
  const [tasks, setTask] = useState([]);
  const [inputForm, setInputForm] = useState("")

  React.useEffect(() => {
    fetch("http://192.168.1.73:3000/tasks/all").then((res) => {
      console.log(res.json().then(body => {setTask(body); console.log(body)}))
      
    }).catch((e) => {
      console.log(e)
    })
  }, [])

  return (
    <div>
      <InputForm setTask={setTask} tasks={tasks} inputForm={inputForm} setInputForm={setInputForm} />
      <TodoList tasks={tasks} setTask={setTask} />
    </div>
  );
}

export default App;
