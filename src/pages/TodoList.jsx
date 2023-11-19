import React, { useState } from 'react';
import uuid from 'react-uuid';
import "../stylesheets/TodoList.css";

export default function TodoList() {
   const [items, setItems] = useState(() => [
      {
         id1: uuid(),
         id2: uuid(),
         text: 'task 1',
         buttons: [],
      },
      {
         id1: uuid(),
         id2: uuid(),
         text: 'task 2',
         buttons: [],
      },
   ]);

   function editItem(id, id2) {

      let newId = uuid();

      // Corroboramos la existencia de un antiguo botón ya creado por medio de id's
      items.forEach((value) => {
         if (value.id1 === id) {
            value.buttons.push(newId);
         }

         if ((value.buttons.length === 1) && (value.id1 === id)) {
            setButton(id, id2, newId)
         }
      })

      const catchInput = document.getElementById(id);
      catchInput.disabled = false;
      catchInput.focus();

      // Guardamos el valor dentro del objeto items y lo renderizamos
      catchInput.addEventListener("keyup", () => {
         const newValue = catchInput.value;

         items.forEach((item, index) => {
            if (item.id1 === id) {
               items[index].text = newValue;
            }
            setItems((items => [...items]));
         })
      })
   }

   function setButton(id, id2, newId) {
      // <div> que contiene los botones
      const divButtons = document.getElementById(id2);

      const newButton = document.createElement("button");
      newButton.classList.add("btnOkay")
      newButton.classList.add("btn")
      newButton.classList.add("position-static")

      newButton.setAttribute("id", newId)

      newButton.textContent = "Ok";

      newButton.addEventListener("click", () => {
         const buttonCreated = document.getElementById(newId)
         buttonCreated.remove();

         const inputToDisabled = document.getElementById(id);
         inputToDisabled.disabled = true;

         items.forEach((value) => {
            if (value.id1 === id) {
               value.buttons = []
            }
         })

      })
      divButtons.appendChild(newButton);
   }

   function deleteItem(id) {
      const newList = items.filter((item) => item.id1 !== id);
      setItems(newList);
   };

   function addItem() {
      const text = document.getElementById("newText").value;
      if (text) {
         setItems((items) => [
            ...items,
            {
               id1: uuid(),
               id2: uuid(),
               text: text,
               buttons: [],
            },
         ]);
      }
   };

   return (
      <div className="mainContainer d-flex justify-content-center align-items-center">
         <div className="text-start border border-3 border-white bg-transparent" id="container-todo">
            <div className="px-4 pt-4">
               <h1>Todo List</h1>
               <small>A simple React Todo List App</small>
               <hr />
            </div>

            <ul className="list-group">
               {items.map(({ id1, id2, text }) =>
                  <li key={id1} className="list-group-item border-0 mb-2 px-4 rounded-0 d-flex justify-content-between align-items-center">
                     <div className="input-group">
                        <input
                           id={id1}
                           className="form-control bg-transparent text-white border-0 position-relative"
                           type="text"
                           defaultValue={text}
                           disabled
                        />
                        <div className="d-flex gap-2" id={id2} >
                           <button
                              className="btn bg-transparent border-0 p-0"
                              onClick={() => editItem(id1, id2)}
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="white" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" /></svg>
                           </button>
                           <button
                              className="btn bg-transparent border-0 p-0"
                              onClick={() => deleteItem(id1)}
                           >
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" color="white" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16"><path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" /></svg>
                           </button>
                        </div>
                     </div>
                  </li>)
               }
            </ul>

            <div className="mx-4 mt-4 mb-4">
               <h4>New Todo</h4>
               <div className="input-group" style={{ height: "3rem" }}>
                  <input id="newText" type="text" placeholder="New Todo" className="form-control rounded-0" style={{ height: "100%" }} />
                  <button
                     className="btn border-white rounded-0 ms-2 fw-normal"
                     style={{ color: "#fff", height: "100%" }}
                     onClick={() => addItem()}
                  >
                     ADD TODO
                  </button>

               </div>
            </div>
         </div>
      </div>
   )
}
