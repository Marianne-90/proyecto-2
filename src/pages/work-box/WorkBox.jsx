import { useState } from "react";
import "./style.css";
import { WorkForm } from "./WorkForm";


export const WorkBox = () => {
  
const [showForm, setShowForm] = useState(true);

  return (
    <div className="pages">
      <div className="work">
        <h2>Bolsa de Trabajo</h2>



        {showForm && <WorkForm status={setShowForm}/>}
      </div>
    </div>
  );
};
