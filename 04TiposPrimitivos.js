/**
 * PRINCIPAIS TIPOS DE DADOS DO JAVASCRIPT
 *
 * string
 *  -> 'Olá', "Olá mundo", `Hello World`
 *
 * number
 *  -> 3, 2.456, 3e-2
 *
 * boolean
 *  -> true, false
 *
 * undefined
 *  -> tipo de variável não inicializada
 *
 * null
 *  -> um valor nulo: vazio ou deconhecido
 *
 * object
 *  -> conjunto de chave-valor ex: let pessoa = { nome: 'Willian', idade: 22 }
 *
 * obs.: JS é tipado dinamicamente
 */

/* 
Comentário de
múltiplas
linhas
*/

// comentário simples

let nome = 'Willian';
nome = 22;
// console.log(nome);

/** UNDEFINED */
let a;
let b = undefined;
let c = null;
// console.log(c);

/** STRING **/
let nome2 = 'Willian';
let nome3 = 'Werlley'; //"Werlley"
let nome4 = `Alan`;
const templateStrig = `Meu nome é ${nome2}, não é ${nome3}`;
// console.log(templateStrig);

/** NUMBER */
const number = 1;
const pi = 3.14;
const exp = 5e6;
// console.log(number, pi, exp);

/** BOOLEAN */
const isJavaScript = true;
const isJava = false;
// console.log(isJavaScript, isJava);

/** OBJETOS */
let pessoa = {
  nome: 'Willian',
  sobrenome: 'Pracinao',
  idade: 22,
  isStudant: true,
};
// console.log(pessoa);

/** TYPEOF */
// console.log(typeof pessoa);

console.log(typeof 1);
console.log(typeof '1');
console.log(1 === '1');
