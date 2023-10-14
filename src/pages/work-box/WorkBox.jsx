import { useState } from "react";
import "./style.css";
import { WorkForm } from "./WorkForm";
import { WORK_DATA } from "src/data/workData";
import { WorkItem } from "./WorkItem";

export const WorkBox = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pages">
      <div className="work">
        <h2>Bolsa de Trabajo</h2>

        {WORK_DATA.map((element, index) => (
          <WorkItem status={setShowForm} work={element} key={index}/>
        ))}

        {showForm && <WorkForm status={setShowForm} />}
      </div>
    </div>
  );
};
