
import { useEffect,useState } from "react";
import { GetCursoAll } from "../api/curso.api";
import {CursoCard} from "./CursoCard"
export function CursoList() {
    
    const[cursos,setCursos]=useState([]);
    useEffect(()=>{

        async function LoadCurso(){
          const info_curso = await GetCursoAll();
          setCursos(info_curso.data)
        }
        LoadCurso()
    },[]);

    return(
        <div className="grid grid-cols-3 gap-3">
        
          {cursos.map(curso=>(

             
                <CursoCard key={curso.id} curso={curso}/>
       



          ))}
        
        
        
        </div>
    )
}
