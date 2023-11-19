import React, { Fragment, useState } from "react";
import "../stylesheets/Calculadora.css";


function Boton({ number, value }) {
   return (
      <Fragment>
         <div className="col p-1" style={{ width: "100%", height: "25%" }}>
            <input
               style={{ width: "100%", height: "100%" }}
               className="bg-primary border-0 text-white rounded-4 fs-1"
               type="button"
               id={number}
               value={value}
               onClick={() => document.calculator.ans.value += number}
            />
         </div>
      </Fragment>
   );
}

function BotonEqual({ number, value }) {
   return (
      <Fragment>
         <div className="col p-1" style={{ width: "100%", height: "25%" }}>
            <input
               style={{ width: "100%", height: "100%" }}
               className="bg-success border-light text-white rounded-4 fs-1"
               type="button"
               id={number}
               value={value}
               onClick={() => document.calculator.ans.value = eval(document.calculator.ans.value)}
            />
         </div>
      </Fragment>
   );
}

function BotonClear({ number, value }) {
   return (
      <Fragment>
         <div className="col p-1" style={{ width: "100%", height: "100%" }}>
            <input
               style={{ width: "100%", height: "100%" }}
               className="bg-danger border-0 text-white rounded-4 fs-1"
               type="button"
               id={number}
               value={value}
               onClick={() => document.calculator.ans.value = ""}
            />
         </div>
      </Fragment>
   );
}

export default function Calculadora() {
   // const [number, setNumber] = useState(0);
   return (
      <div className="mainContainer d-flex justify-content-center">
         <form name="calculator" className="d-flex align-items-center" style={{ height: "100%" }}>
            <div
               className="border border-2 border-light rounded-4 d-flex flex-wrap justify-content-center"
               id="divCalculadora"
            >
               <div className="pt-3" style={{ height: "20%", width: "100%", padding: "0 .9rem 0 .9rem" }}>
                  <input
                     type="textfield"
                     name="ans"
                     id="screen"
                     className="border-light bg-primary text-white rounded-4 text-end px-2"
                     style={{ height: "100%", width: "100%", fontSize: "3.5rem" }}
                     placeholder="0"
                     disabled
                  />
               </div>
               <div
                  className="d-flex justify-content-center flex-wrap pb-3 pt-2"
                  style={{ width: "100%", height: "80%", padding: "0 .7rem 0 .7rem" }}
               >
                  <div className="columna col-3">
                     <Boton number={7} value={7} />
                     <Boton number={4} value={4} />
                     <Boton number={1} value={1} />
                     <Boton number={0} value={0} />
                  </div>
                  <div className="columna col-3">
                     <Boton number={8} value={8} />
                     <Boton number={5} value={5} />
                     <Boton number={2} value={2} />
                     <Boton number={"."} value={"."} />
                  </div>
                  <div className="columna col-3">
                     <Boton number={9} value={9} />
                     <Boton number={6} value={6} />
                     <Boton number={3} value={3} />
                     <BotonEqual number={"="} value={"="} />
                  </div>
                  <div className="columna col-3">
                     <Boton number={"/"} value={"/"} />
                     <Boton number={"*"} value={"*"} />
                     <Boton number={"-"} value={"-"} />
                     <Boton number={"+"} value={"+"} />
                  </div>
                  <div className="col-12" >
                     <BotonClear number={"C"} value={"C"} />
                  </div>
               </div>
            </div>
         </form>
      </div>
   );
}
