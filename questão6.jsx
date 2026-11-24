import { useState } from "react";

function ListaDeNomes() {
  const [nomes, setNomes] = useState([
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Bruno" },
  ]);
  const [input, setInput] = useState("");

  function adicionarNome() {
    const nomeLimpo = input.trim();
    if (!nomeLimpo) return; // Se estiver vazio ou só com espaços, não faz nada
    
    setNomes([...nomes, { id: Date.now(), nome: nomeLimpo }]);
    setInput("");
  }

  function removerNome(id) {
    setNomes(nomes.filter((item) => item.id !== id));
  }

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Digite um nome..."
      />
      <button onClick={adicionarNome}>Adicionar</button>
      
      <ul>
        {nomes.map((item) => (
          <li key={item.id}>
            {item.nome}{" "}
            <button onClick={() => removerNome(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeNomes;
