const alunos = [
  { nome: "João", nota: 1 },
  { nome: "Pedro", nota: 2 },
  { nome: "Rebeca", nota: 3 },
  { nome: "Lucas", nota: 4 },
  { nome: "Sabrina", nota: 5 },
  { nome: "Lucia", nota: 6 },
  { nome: "Fernanda", nota: 7 },
  { nome: "Guilherme", nota: 8 },
  { nome: "Enzo", nota: 9 },
  { nome: "Sabrina", nota: 10 },
];

const aprovados = () => {
  return alunos.filter((aluno) => aluno.nota >= 6);
};

console.log(aprovados());
