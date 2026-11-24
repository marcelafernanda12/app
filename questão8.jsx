// Usamos filter() em vez de splice() porque splice() MUTA o array original.
// Quando o array é mutado, a referência do estado continua a mesma, então o
// React não detecta a mudança e a tela não é atualizada.
// filter() retorna um NOVO array sem o item removido. A nova referência avisa
// o React para re-renderizar, e o array antigo permanece intacto.
// A mesma regra vale para push, pop, shift, unshift, sort e reverse:
// use versões que retornem novos arrays (spread, filter, map, slice, toSorted).
// Errado: tarefas.splice(i, 1); setTarefas(tarefas);
// Certo: setTarefas(tarefas.filter((t) => t.id !== id));
