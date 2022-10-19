function novoAluno(nome, idade){
    return {nome, idade}
}

let alunos = [
    novoAluno("Mario", 25),
    novoAluno("José", 45),
    novoAluno("Marcia",19),
    novoAluno("João", 35)
]

function temMenosde30(aluno){
    return aluno.idade < 30
}

function temMaisde30(aluno){
    return aluno.idade > 30
}

// forma de fazer sem o filter

// function filtro(callback){
//     let alunosFiltrados = [];
//     for (let aluno of this){
//         if(callback(aluno)){
//             alunosFiltrados.push(aluno)
//         }
//     }
//     return alunosFiltrados
// }

// alunos.filtro = filtro

// console.log(alunos.filtro(temMenosde30))


// usando o filter:

console.log(alunos.filter(temMaisde30))