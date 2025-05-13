// // 1. Retorna a quantidade de itens de um array (sem usar length)
// function contarItens(array) {
//     let count = 0;
//     while (array[count] !== undefined) {
//         count++;
//     }
//     return count;
// }

// // 2. Retorna todos os números pares de um array (sem usar filter)
// function obterPares(array) {
//     let resultado = [];
//     let i = 0;
//     while (array[i] !== undefined) {
//         if (array[i] % 2 === 0) {
//             resultado[contarItens(resultado)] = array[i];
//         }
//         i++;
//     }
//     return resultado;
// }

// // 3. Transforma frases de snake_case para camelCase (sem replace, split, join)
// function snakeToCamel(snake) {
//     let resultado = '';
//     let i = 0;
//     let proximaMaiuscula = false;

//     while (snake[i] !== undefined) {
//         let char = snake[i];

//         if (char === '_') {
//             proximaMaiuscula = true;
//         } else {
//             if (proximaMaiuscula) {
//                 let codigo = snake.charCodeAt(i);
//                 if (codigo >= 97 && codigo <= 122) {
//                     resultado += String.fromCharCode(codigo - 32);
//                 } else {
//                     resultado += char;
//                 }
//                 proximaMaiuscula = false;
//             } else {
//                 resultado += char;
//             }
//         }
//         i++;
//     }

//     return resultado;
// }

// // 4. Retorna true se todos os itens de um array obedecem a uma condição (sem map, every)
// function todosPassam(array, condicao) {
//     let i = 0;
//     while (array[i] !== undefined) {
//         if (!condicao(array[i])) {
//             return false;
//         }
//         i++;
//     }
//     return true;
// }

// // 5. Verifica a força de uma senha
// function verificarForcaSenha(senha) {
//     let temMaiuscula = false;
//     let temNumero = false;
//     let temEspecial = false;
//     let tamanhoValido = false;
//     let i = 0;

//     while (senha[i] !== undefined) {
//         let code = senha.charCodeAt(i);

//         if (!temMaiuscula && code >= 65 && code <= 90) {
//             temMaiuscula = true;
//         }

//         if (!temNumero && code >= 48 && code <= 57) {
//             temNumero = true;
//         }

//         if (!temEspecial &&
//             ((code >= 33 && code <= 47) ||
//             (code >= 58 && code <= 64) ||
//             (code >= 91 && code <= 96) ||
//             (code >= 123 && code <= 126))) {
//             temEspecial = true;
//         }

//         if (!tamanhoValido && i >= 7) {
//             tamanhoValido = true;
//         }

//         i++;
//     }

//     let pontos = 0;
//     if (temMaiuscula) pontos++;
//     if (temNumero) pontos++;
//     if (temEspecial) pontos++;
//     if (tamanhoValido) pontos++;

//     switch (pontos) {
//         case 4: return "forte";
//         case 3: return "media";
//         case 2: return "fraca";
//         case 1: return "muito fraca";
//         default: return "invalida";
//     }
// }

// // ==============================
// // Testes
// // ==============================

// console.log("1. Contar itens:", contarItens([1, 2, 3, 4])); // 4
// console.log("2. Obter pares:", obterPares([1,2,3,4,5,6,7,8,9,10])); // [2,4,6,8,10]
// console.log("3. Snake para camel:", snakeToCamel("exemplo_de_snake_case")); // exemploDeSnakeCase
// console.log("4. Todos maiores que 5:", todosPassam([6, 7, 8], n => n > 5)); // true
// console.log("5. Força da senha 'Abc123!@':", verificarForcaSenha("Abc123!@")); // forte
// console.log("5. Força da senha 'abc123':", verificarForcaSenha("abc123")); // invalida
