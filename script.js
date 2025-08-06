function inserirNome(){
let nomeUsuario = prompt("Qual oseu nome");
    let elemento = document.querySelector("#nome-usuario");
    console.log(elemento);
    elemento.textContent = nomeUsuario;
}

const lista = document.querySelector('#lista')
lista.textContent = linguagens[0];
lista.textContent = linguagens[1];
lista.textContent = linguagens[2];

let aluno1 ={
    nome: 'Carlos',
    idade: 17,
    anoletivo: 'Ensino Médio',
    matériasFavoritas: ['Matemática, Português, Física']
}

console.log(aluno1.nome);
console.log(aluno1.idade);
console.log(aluno1.materisFavoritas);
console.log(aluno1.matériasFavoritas[1]);

const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
objeto.textContent = aluno1.idade;
objeto.textContent = aluno1.materiasFavoritas[1];
