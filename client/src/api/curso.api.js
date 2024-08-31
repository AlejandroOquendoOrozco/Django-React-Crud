import axios, { Axios } from "axios";

const CursoApi=axios.create({

        baseURL:"http://localhost:8000/cursos/api/v1/cursos/"
})

export  const GetCursoAll=()=>{

   return CursoApi.get("/")

}
export const GetCurso=(id)=>{
   return CursoApi.get(`/${id}`)
}

export const CreateCurso=(curso)=>{

    return CursoApi.post("/",curso)


}

export const DeleteCurso=(id)=>{
   return CursoApi.delete(`/${id}/`,)
}

export const UpdateCurso=(id,curso)=>{
   CursoApi.put(`/${id}/`,curso)

}