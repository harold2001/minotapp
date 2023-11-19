import { useState } from "react";
import uuid from "react-uuid";
import "../stylesheets/Notas.css"

export default function Notas() {
   const [notes, setNotes] = useState(() => [
      {
         id: uuid(),
         title: "VISTO EN CLASE",
         text: "HTML, CSS"
      },
      {
         id: uuid(),
         title: "ESTUDIO AUTODIDACTA",
         text: "JAVASCRIPT"
      },
   ])

   function removeItem(id) {
      const newList = notes.filter((note) => note.id !== id)
      setNotes(newList);
   }

   function addItem() {
      const newTitle = document.getElementById("newTitle").value;
      const newText = document.getElementById("newText").value;
      setNotes(() => [
         ...notes,
         {
            id: uuid(),
            title: newTitle,
            text: newText,
         }
      ])
   }

   return (
      <div className="d-flex flex-column justify-content-center align-items-start gap-4 p-5" id="firstContainer">
         <div className="container position-relative mb-3 mt-4" id="containerData">
            <div className="dropdown text-center" style={{ zIndex: "30" }}>
               <button id="buttonIngresar" className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  Ingresar texto nuevo
               </button>
               <div className="dropdown-menu p-3">
                  <div className="mb-3">
                     <label htmlFor="newTitle" className="form-label">Ingrese el título:</label>
                     <input type="text" className="form-control" id="newTitle" />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="newText" className="form-label">Ingrese el texto:</label>
                     <textarea cols={"50"} rows={"4"} className="form-control" id="newText" />
                  </div>
                  <div>
                     <button
                        className="btn btn-primary"
                        onClick={() => addItem()}
                     >
                        ENVIAR
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <div className="d-flex justify-content-center flex-wrap container position-relative flex-column-reverse flex-md-row">
            {notes.map(({ id, title, text }) =>
               <div key={id} className="col-12 mb-3 card border-0 rounded-1 position-relative col-md-5 me-md-4 mb-md-4 col-lg-4 col-xl-3" style={{ backgroundColor: "#d4b062", zIndex: "20" }}>
                  <button
                     className="btn bg-transparent border-0 p-0 fs-1 position-absolute end-0 top-0 d-flex flex-column-reverse me-1 mt-1"
                     style={{ height: "45px" }}
                     onClick={(() => removeItem(id))}
                  >
                     &times;
                  </button>
                  <div className="card-body text-start p-4" style={{ height: "200px" }}>
                     <h4>{title}</h4>
                     <p>{text}</p>
                  </div>
               </div>)}
         </div>
      </div>
   );
}