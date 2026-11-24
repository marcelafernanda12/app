import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    const textoLimpo = input.trim();
    if (!textoLimpo) return;
    setTarefas([...tarefas, { id: Date.now(), texto: textoLimpo }]);
    setInput("");
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h1>Tarefas</h1>

      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Digite uma nova tarefa..."
      />
      <button onClick={adicionarTarefa}>Adicionar</button>

      <p>Total de tarefas: {tarefas.length}</p>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{" "}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
