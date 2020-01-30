//unshift
// Adiciona na primeira posição do array o objeto passado como parâmetro
// e retorna o length do array atualizado

let estudantes = [
    {
      nome: 'Alvaro',
      media : 9,
      curso : 'Android',
    },
    {
      nome: 'Daniel',
      media : 6,
      curso : 'Full Stack',
    },
    {
      nome: 'Alexis',
      media : 3,
      curso : 'iOS',
    }
  ];
  
  estudantes.unshift(
    {
      nome: "Mariana",
      media: 9,
      curso: "Full Stack"
    });