// Versão A: const usuarios = [...];
// A variável é só um valor em memória. Se for alterada, o React não sabe
// disso e a tela não é atualizada.

// Versão B: const [usuarios, setUsuarios] = useState([...]);
// O estado é observado pelo React. Ao chamar setUsuarios(novoArray), o React
// compara a referência do array, percebe a mudança e re-renderiza o componente.
// Como CRUD é justamente alterar dados (criar, editar, remover), esses dados
// precisam estar no estado para que a interface reflita as mudanças.