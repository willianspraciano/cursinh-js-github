/**
 * @let
 * tem escopo de bloco {}
 * pode ser atualizado, mas não declarado novamente
 */
let nome = 'William';
let nome2 = 'Praciano';

nome = 'Francisco';
console.log(nome, nome2);

function newFunction() {
  let nome = 'Flávio';
  console.log(nome);
}
newFunction();
