
import { BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import {CursoPage} from "./pages/CursoPage";
import {CursoFormPage} from "./pages/CursoFormPage";
import {Navigations } from "./components/Navigations";

import {  Toaster} from "react-hot-toast";
function App() {


  return(

    <BrowserRouter>
      <div className="container mx-auto ">
        <Navigations/>
        <Routes>
          <Route path="/" element={<Navigate to={"/cursos"}/>}/>
          <Route path="/cursos" element={<CursoPage/>}/>
          <Route path="/cursos-create" element={<CursoFormPage/>}/>
          <Route path="/cursos/:id" element={<CursoFormPage/>}/>
        </Routes>
        <Toaster/>

      </div>


    </BrowserRouter>
  )
  
}

export default App