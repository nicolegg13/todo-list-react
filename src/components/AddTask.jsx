import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  //props

  //acessar valor dos inputs
  const [title, setTitle] = useState(""); //inicia vazio (no input)
  const [description, setDescription] = useState("");
  // console.log({ title, description });

  //função para envio do form
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   if (!title.trim() || !description.trim()) {
  //     //.trim() -- verifica alem de espaços (nao conta)
  //     return alert("Preencha todos os campos");
  //   }
  // };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <h1>Add task</h1>
      {/* evento onSubmit no form */}
      {/* <form onSubmit={handleFormSubmit}> */}
      {/* <form>
        <input */}
        <Input 
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)} //atualiza state conform muda input
        />

        <Input
        type="text"
          placeholder="Task description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-md w-full"
          onClick={(event) => {
            event.preventDefault();
            if (!title.trim() || !description.trim()) {
              //.trim() -- verifica alem de espaços (nao conta)
              return alert("Preencha todos os campos");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription(""); //limpa
          }} //chama função que foi passada como prop, states tem os valores dos inputs
        >adicionar
        </button>
      {/* </form> */}
    </div>
  );
}

export default AddTask;
