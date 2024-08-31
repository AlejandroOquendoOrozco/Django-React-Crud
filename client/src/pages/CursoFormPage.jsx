import { useForm } from "react-hook-form";
import { CreateCurso ,DeleteCurso,GetCurso, UpdateCurso} from "../api/curso.api";
import { useNavigate,useParams} from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
export function CursoFormPage() {
   const { register, handleSubmit,formState:{errors},setValue} = useForm();

   const navigate=useNavigate();
   const params=useParams();

   const onSubmit = handleSubmit(async data => {
    try {
        if(params.id){
           await UpdateCurso(params.id,data)
           toast.success("CURSO ACTUALIZADO")
        }else{
            await CreateCurso(data);
            toast.success("CURSO CREADO")
            
        }
        navigate("/cursos");
    } catch (error) {
       console.error("Error al crear el curso:", error);
      
    }
 });
  useEffect(()=>{
    async function CargarCurso(){
        if(params.id){
            const curso= await GetCurso(params.id)
            setValue("_codigo",curso.data._codigo)
            setValue("_nombre_materia",curso.data._nombre_materia)
            setValue("_horario",curso.data._horario)
            setValue("_creditos",curso.data._creditos)
          }
    }
    CargarCurso()
  })

   return (
        <div className="max-w-xl mx-auto">
           <form onSubmit={onSubmit}>
            <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white font-bold" type="text" placeholder="CODIGO" {...register("_codigo", { required: true })} />{errors._codigo && <span>ESTE CAMPO ES REQUERIDO</span>}
            <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white font-bold"type="text" placeholder="NOMBRE" {...register("_nombre_materia", { required: true })} />{errors._nombre_materia && <span>ESTE CAMPO ES REQUERIDO</span>}
            <textarea className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white font-bold" rows="3" placeholder="HORARIO" {...register("_horario", { required: true })}></textarea>{errors._horario && <span>ESTE CAMPO ES REQUERIDO</span>}
            <input className="bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white font-bold"  type="text" placeholder="CREDITOS" {...register("_creditos", { required: true })} />{errors._creditos && <span>ESTE CAMPO ES REQUERIDO</span>}
            <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 text-white font-bold"type="submit">GUARDAR</button>
           </form>
           {
              params.id && <button className="bg-red-500 p-3 rounded-lg w-48 mt-3" onClick={async()=>{
                  const okey=window.confirm("ESTAS SEGURO DE ELIMINAR ESTE CAMPO")
                  if(okey){
                   await DeleteCurso(params.id)
                   toast.success("CURSO ELIMINADO")
                   navigate("/cursos")
                  }
              }}>ELIMINAR</button>
           }
         
        </div>
   );
}
