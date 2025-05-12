// 1. Contar itens de um array
function contarItens(array) {
    let count = 0;
    while (array[count] !== undefined) {
        count++;
    }
    return count;
}

// 2. Obter números pares de um array
function obterPares(array) {
    let resultado = [];
    for (let i = 0; i < contarItens(array); i++) {
        if (array[i] % 2 === 0) {
            resultado[resultado.length] = array[i];
        }
    }
    return resultado;
}

// 3. Converter snake_case para camelCase
function snakeToCamel(snake) {
    let resultado = '';
    let i = 0;
    let maiuscula = false;

    while (snake[i] !== undefined) {
        if (snake[i] === '_') {
            maiuscula = true;
        } else {
            if (maiuscula) {
                let code = snake.charCodeAt(i);
                if (code >= 97 && code <= 122) {
                    resultado += String.fromCharCode(code - 32);
                } else {
                    resultado += snake[i];
                }
                maiuscula = false;
            } else {
                resultado += snake[i];
            }
        }
        i++;
    }
    return resultado;
}

// 4. Verificar se todos os itens passam em uma condição
function todosPassam(array, condicao) {
    let i = 0;
    while (array[i] !== undefined) {
        if (!condicao(array[i])) {
            return false;
        }
        i++;
    }
    return true;
}

// 5. Verificar força da senha
function verificarForcaSenha(senha) {
    let temMaiuscula = false;
    let temNumero = false;
    let temEspecial = false;
    let tamanhoValido = false;
    let i = 0;

    while (senha[i] !== undefined) {
        let char = senha[i];
        let code = senha.charCodeAt(i);

        if (!tamanhoValido && i >= 7) {
            tamanhoValido = true;
        }

        if (!temMaiuscula && code >= 65 && code <= 90) {
            temMaiuscula = true;
        }

        if (!temNumero && code >= 48 && code <= 57) {
            temNumero = true;
        }

        if (!temEspecial && (
            (code >= 33 && code <= 47) ||
            (code >= 58 && code <= 64) ||
            (code >= 91 && code <= 96) ||
            (code >= 123 && code <= 126)
        )) {
            temEspecial = true;
        }

        i++;
    }

    let requisitos = 0;
    if (temMaiuscula) requisitos++;
    if (temNumero) requisitos++;
    if (temEspecial) requisitos++;
    if (tamanhoValido) requisitos++;

    switch (requisitos) {
        case 4: return 'forte';
        case 3: return 'média';
        case 2: return 'fraca';
        case 1: return 'muito fraca';
        default: return 'inválida';
    }
}

// Testes
console.log("Quantidade de itens:", contarItens([1, 2, 3, 4])); // 4
console.log("Números pares:", obterPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2, 4, 6, 8, 10]
console.log("Snake para camel:", snakeToCamel("exemplo_de_conversao")); // exemploDeConversao
console.log("Todos maiores que 5:", todosPassam([6, 7, 8], x => x > 5)); // true
console.log("Força da senha 'Aa1@abcd':", verificarForcaSenha("Aa1@abcd")); // forte
console.log("Força da senha 'abcde':", verificarForcaSenha("abcde")); // inválida
no