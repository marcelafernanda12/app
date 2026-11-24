import { useState } from "react";

function ListaTarefas() {
 const [tarefas, setTarefas] = useState([
 { id: 1, texto: "Estudar React", concluida: false },
 { id: 2, texto: "Fazer exercícios", concluida: false },
 ]);
 const [input, setInput] = useState("");

 function adicionarTarefa() {
 const textoLimpo = input.trim();
 if (!textoLimpo) return;
 setTarefas([...tarefas, { id: Date.now(), texto: textoLimpo, concluida: false }]);
 setInput("");
 }

 function removerTarefa(id) {
 setTarefas(tarefas.filter((t) => t.id !== id));
 }

 function toggleConcluida(id) {
 setTarefas(
   tarefas.map((t) =>
     t.id === id ? { ...t, concluida: !t.concluida } : t
   )
 );
 }

 return (
   <div>
     <h1>Lista de Tarefas</h1>

     <input 
       type="text" 
       value={input} 
       onChange={(e) => setInput(e.target.value)} 
       placeholder="Nova tarefa..."
     />
     <button onClick={adicionarTarefa}>Adicionar</button>

     <ul>
       {tarefas.map((tarefa) => (
         <li key={tarefa.id}>
           <input 
             type="checkbox" 
             checked={tarefa.concluida} 
             onChange={() => toggleConcluida(tarefa.id)} 
           />
           
           <span style={{ textDecoration: tarefa.concluida ? "line-through" : "none" }}>
             {tarefa.texto}
           </span>{" "}

           <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
         </li>
       ))}
     </ul>
   </div>
 );
}

export default ListaTarefas;
