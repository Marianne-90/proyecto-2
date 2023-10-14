export const WorkItem = ({ status, work }) => {

  return (
    <div className="workItem">
      <p className="title">{work.puesto}</p>
      <p className="desc">{work.descripcion}</p>
      <div className="requisitos">
        <p id="requisitos">Requisitos</p>
        {work.requisitos.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </div>
      <button onClick={()=> status(true)}>Aplicar</button>
    </div>
  );
};
