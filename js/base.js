const nome = "Joe";
let nome2 = "";
let pessoaDefault = {
    nome: "Joe",
    idade: "18",
    trabalho: "Dev" 
}

let nomes = ["Joe","Amanda","Bruna"]
let pessoas = [
    {
        nome: "Joe",
        idade: "18",
        trabalho: "Dev"  
    },
    {
        nome: "Amanda",
        idade: "18",
        trabalho: "Dev"
    },
    {
        nome: "Bruna",
        idade: "18",
        trabalho: "Dev"
    }
]

function alterarnome() {
    nome2 = "Carol"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Dani",
    idade: "18",
    trabalho: "Dev"
});

imprimirPessoas();
