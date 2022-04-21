/**
 * @var
 * Antes ES6 ela era a única
 * tem escopo global ou escopo de função/local
 * variáveis var podem ser declaradas de novo e atualizadas (isso é um problema!)
 */

var nome = 'Willian';
console.log(nome);

var nome = 'João';
console.log(nome);

function newFunction() {
  var nome = 'Erica';
  console.log(nome);
}
newFunction();
