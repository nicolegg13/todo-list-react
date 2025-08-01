import { useEffect, useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4} from 'uuid';
import Title from "./components/Title";
import Test from "./components/Test";

function App() {
  // const [tasks, setTasks] = useState([{
  //   id: 1,
  //   title: "Tarefa 1",
  //   description: "aaaaaaaaaaaaaaaaaaaaaaaa",
  //   isCompleted: false
  // }, {
  //   id: 2,
  //   title: "Tarefa 2",
  //   description: "aaaaaaaaaaaaaaaaaaaaaaaa",
  //   isCompleted: true
  // }, {
  //   id: 3,
  //   title: "Tarefa 3",
  //   description: "aaaaaaaaaaaaaaaaaaaaaaaa",
  //   isCompleted: true
  // }
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []); //pega dados do local storage, se nao tiver nada mostra lista vazia


//salvar tarefas no local storage e manter num state
//parametros: função e lista
useEffect(() => {
  //executa a função sempre que algum valor da lista (tasks) for alterado = state atualizado - console.log("tasks foi alterado")
  
  //atualizar local storage com o state
  //parametros: nome de identificação do dado, o que vai armazenar (json)
  localStorage.setItem("tasks", JSON.stringify(tasks)) //converte tasks (objeto js) para string
    //inspecionar - application - local storage

  //pegar dados do local storage e jogar no state 
}, [tasks])


//pegar dados de API e persistir
useEffect(() => {
  const fetchTasks = async () => {
    //chama API
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=10', 
    {method: 'GET'}
  );

  //pega dados que ela retorna
  const data = await response.json(); //converte response para json

  //armazenar/persistir dados no state
  setTasks(data)
  };
  //executar 
  // fetchTasks();
}, [])


// recebe qual tarefa foi clicada
function onTaskClick(taskId) {
  const newTasks = tasks.map(task => {
    //verificase o id da tarefa atual é o id da tarefa clicada
    if (task.id === taskId) { //achou
      //retorna nova tarefa com dados e isCompleted invertido
      return {
        ...task, isCompleted: !task.isCompleted
      }
    }
    //else - retorna tarefa atual 
    return task;
  });
  //atualiza estado para a nova lista de tarefas
  setTasks(newTasks);
}


//mantem na lista todas as tarefas diferentes da tarefa clicada
function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id != taskId);
  //atualiza estado para a nova lista de tarefas
  setTasks(newTasks);
}


//adiciona nova tarefa na lista
function onAddTaskSubmit (title, description) {
  const newTask = {
    id: v4(), //gera id
    title, //mesmo nome do parametro
    description,
    isCompleted: false,
  };
  setTasks([...tasks, newTask]); //adiciona nova tarefa no final da lista - atualiza estado
}


// renderiza tudo (componentes filhos)
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      {/* <Test /> */}
      <div className="width[500px] space-y-4"> {/* espaço vertical entre elementos */}
        {/* <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1> */}
        <Title>Gerenciador de tarefas</Title>
        {/* renderizar */}
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks = {tasks} onTaskClick = {onTaskClick} onDeleteTaskClick={onDeleteTaskClick} onAddTaskSubmit={onAddTaskSubmit}/> {/* componente filho */}
        {/* passar os valores - passa a função onTaskClick como prop*/}
      </div>
    </div>
  );
}


export default App;
