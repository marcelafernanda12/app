import { useState } from "react";

function ListaDeNomes() {
 const [nomes, setNomes] = useState(["Ana", "Bruno"]);
 const [input, setInput] = useState("");

 function adicionarNome() {
   if (input.trim() === "") return; 
   setNomes([...nomes, input]);
   setInput("");
 }

 return (
   <div>
     <input 
       type="text" 
       value={input} 
       onChange={(e) => setInput(e.target.value)} 
     />
     <button onClick={adicionarNome}>Adicionar</button>
     <ul>
       {nomes.map((nome, index) => (
         <li key={index}>{nome}</li>
       ))}
     </ul>
   </div>
 );
}

export default ListaDeNomes;