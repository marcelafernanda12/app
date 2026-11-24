function editarTarefa(id) {
  const novoTexto = prompt("Novo texto:");
  if (novoTexto) {
    const textoLimpo = novoTexto.trim();
    if (!textoLimpo) return;
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, texto: textoLimpo } : t))
    );
  }
}
