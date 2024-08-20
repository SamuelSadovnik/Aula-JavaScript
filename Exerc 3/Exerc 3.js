
const usuarios = [
    { nome: 'Samuel', idade: 20, email: 'samuel3223@gmail.com' },
    { nome: 'Mat', idade: 12, email: 'mat2909@gmail.com' },
    { nome: 'Belão', idade: 8, email: 'belão293@gmail.com' },
    { nome: 'Cris', idade: 50, email: 'cris13@gmail.com' }
  ];
  
  function exibirMaioresDeIdade(usuarios) {
    const maioresDeIdade = usuarios.filter(usuario => usuario.idade >= 18);
    maioresDeIdade.forEach(usuario => console.log(usuario.nome));
  }
  

  exibirMaioresDeIdade(usuarios);
  