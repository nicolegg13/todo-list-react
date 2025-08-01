import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); //pega 1o elemento da lista - searchParams
  //pega valores
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <div className="width[500px] space-y-4">
        <div className="flex justify-center relative mb-6">

            {/* mesmo que
            <button onClick={function() {
                navigate(-1);
            }}              */}
          <button onClick={() => navigate(-1)} //ok para função de 1 linha
          className="absolute left-0 top-0 bottom-0 bg-slate-400 text-white p-2 rounded-md">
            <ChevronLeftIcon />
          </button>
          {/* <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1> */}
          <Title>Detalhes da tarefa</Title>
        </div>
        <div className={"text-left bg-slate-200 p-2 rounded-md"}>
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
