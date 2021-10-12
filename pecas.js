let peso = 110;

if (peso > 100) {
    console.log("A peça possui um peso adequado, pode ser cadastrada!");
} else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo");
}

let listaPecas = ["Disco de Freio","Amortecedor","Virabrequim","Vela","Bateria","Radiador","Correia","Carter","Ignição"];

if (listaPecas.length < 10) {
    console.log("A lista ainda possui espaço para mais peças");
} else {
    console.log("Não há espaço disponivel na lista, capacidade máxima foi atingido");
}

let nomePecas = "Disco de Freio"

if (nomePecas.length > 3) {
    console.log("Nome da peça é válido, pode seguir com o cadastro");
} else {
    console.log("Nome da peça é inválido, o nome deve ter mais de 3 caracteres");
}

