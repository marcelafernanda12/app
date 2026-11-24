function adicionarTarefa() {
 const textoLimpo = input.trim();
 if (!textoLimpo) return; // vazio ou só espaços: não faz nada
 setTarefas([...tarefas, { id: Date.now(), texto: textoLimpo }]);
 setInput("");
}
