import { ChevronRightIcon, DeleteIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

// function Tasks(props) {
function Tasks({tasks, onTaskClick, onDeleteTaskClick}) { //desestruturação de props
  // return <h3>{tasks[0].title}</h3>; //renderiza no html
  const navigate = useNavigate() //retorna uma função que permite a navegação programática: redirecionar o usuário em resposta a interações

  function onSeeDetailsClick(task) { //quando clica no botão para ver detalhes
    const query = new URLSearchParams() //faz tratamentos na string para não ter conflitos (ex: espaço)
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
    // navigate(`/task?title=${task.title}&description=${task.description}`)
  }


  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
            {/* task.id é o id da tarefa atual */}
            {/* props.onTaskClick é a função que foi passada como prop */}
            {/* task.id é passado como argumento para a função onTaskClick - atualiza estado*/}
          <button onClick={() => onTaskClick(task.id)}
          className={`text-left bg-slate-400 text-white p-2 rounded-md w-full
            ${task.isCompleted && 'line-through'}`}> {/* se task.isCompleted == true, adiciona a classe line-through */}
            {task.title}
            {/* {task.isCompleted ? " ✅" : " ❌"} */}
            </button>

            {/* quando clicar no botão, vai para a pagina com infos dessa task 
            chama função de mostrar detalhes passando task atual de parametro*/}
          <Button onClick={() => onSeeDetailsClick(task)} >
            <ChevronRightIcon />
          </Button>

          {/* quando clica nesse botão, chama a função onDeleteTaskClick passando o id da tarefa atual 
          função tira a tarefa do state*/}
          <Button  onClick={() => onDeleteTaskClick(task.id)} >
            <DeleteIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
