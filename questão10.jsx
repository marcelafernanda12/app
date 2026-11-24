import { useState } from "react";

function ListaTarefas() {
 const [tarefas, setTarefas] = useState([
 { id: 1, texto: "Estudar React" },
 { id: 2, texto: "Fazer exercícios" },
 ]);
 const [input, setInput] = useState("");
 const [editandoId, setEditandoId] = useState(null);
 const [textoEditado, setTextoEditado] = useState("");

 function adicionarTarefa() {
 const textoLimpo = input.trim();
 if (!textoLimpo) return;
 setTarefas([...tarefas, { id: Date.now(), texto: textoLimpo }]);
 setInput("");
 }

 function removerTarefa(id) {
 setTarefas(tarefas.filter((t) => t.id !== id));
 }

 function iniciarEdicao(tarefa) {
 setEditandoId(tarefa.id);
 setTextoEditado(tarefa.texto);
 }

 function salvarEdicao(id) {
 const textoLimpo = textoEditado.trim();
 if (!textoLimpo) return;
 setTarefas(
   tarefas.map((t) => (t.id === id ? { ...t, texto: textoLimpo } : t))
 );
 setEditandoId(null);
 }

 function cancelarEdicao() {
 setEditandoId(null);
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
           {editandoId === tarefa.id ? (
             <>
               <input 
                 type="text" 
                 value={textoEditado} 
                 onChange={(e) => setTextoEditado(e.target.value)} 
               />
               <button onClick={() => salvarEdicao(tarefa.id)}>Salvar</button>
               <button onClick={cancelarEdicao}>Cancelar</button>
             </>
           ) : (
             <>
               {tarefa.texto}{" "}
               <button onClick={() => iniciarEdicao(tarefa)}>Editar</button>
               <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
             </>
           )}
         </li>
       ))}
     </ul>
   </div>
 );
}

export default ListaTarefas;
