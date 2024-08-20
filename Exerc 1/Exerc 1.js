let notas = [9, 7, 10, 8]

function calcmed(notas) {
    const totNotas = notas.length;
    let soma = 0;

    for (let i = 0; i < totNotas; i++) {
        soma += notas[i];
    }

    const media = soma / totNotas;

    if (media >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

calcmed(notas);

                                                        