import { useNavigate } from "react-router-dom";

export function CursoCard({curso}) {
     const navigate=useNavigate();
    return(
        <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" onClick={()=>{
               navigate(`/cursos/${curso.id}`)
        }} >
                    <h1 className="font-bold uppercase text-white">{curso._nombre_materia}</h1>
                    <p className="text-slate-400">{curso._horario}</p>
                    <hr />
        </div>
    )
    
}