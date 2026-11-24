import { useState } from "react";

function ListaTarefas() {
 const [tarefas, setTarefas] = useState([
   { id: 1, texto: "Estudar JavaScript" },
 ]);
 const [input, setInput] = useState("");

 function adicionarTarefa() {
   if (input.trim() === "") return; 
   const novaTarefa = { id: Date.now(), texto: input };
   setTarefas([...tarefas, novaTarefa]);
   setInput("");
 }

 return (
   <div>
     <input 
       type="text" 
       value={input} 
       onChange={(e) => setInput(e.target.value)} 
       placeholder="Digite uma nova tarefa..."
     />
     <button onClick={adicionarTarefa}>Adicionar</button>
     
     <ul>
       {tarefas.map((tarefa) => (
         <li key={tarefa.id}>
           {tarefa.texto}
         </li>
       ))}
     </ul>
   </div>
 );
}

export default ListaTarefas;