import { Link } from "react-router-dom";

function Navigations() {
    return (
        <div className="flex justify-between py-3">
            <Link to={"/cursos"}>
              <h1 className="font-bold text-3xl mb-4">CURSO APP</h1>
            </Link>
             <button className="bg-indigo-500 px-3 py-2 rounded-lg">
               <Link to={"/cursos-create"}>Crear curso</Link>
             </button>
           
        </div>
    );
}

export { Navigations };
