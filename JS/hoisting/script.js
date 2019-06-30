//zmienna albo funkcja została wywołana przed jej zadeklarowaniem. (najpierw dek funcji, potem zmiennej)
//przenosi wszystkie deklaracje zmiennej, funkcji na sam początek kodu, do globalnego zasięgu lub do zasięgu funkcji.
//(tylko deklaracje, nie przypisanie wartości!!! *****) 

foo(); //12 => wywołanie; funkcja wywołana PRZED jej zadeklarowaniem 1 krok!!!!
function foo(){ // deklaracja 2 krok!!
	console.log(12);
};
foo(); // wywołanie function foo is defined at PARSE time
// 12

//***** jak funckję przypiszę do zmiennej to już undefined dostanę; BO = > function expression jest RUN-TIME; 
//fooo(); fooo is not a function
var fooo = function(){
  console.log('foooo');
}
fooo();

a= 5;// Jeśli zadeklarujesz zmienną po tym jak zostanie użyta, ale zainicjalizujesz jej wartość przed tym, owa wartość zostanie zwrócona:
console.log(a); //5
var a  = 5;
//console.log(c); // Cannot access 'c' before initialization
//const c = 6; // jak let/ const to masz ten błąd; jak var to undefined

function one(){
  console.log(b)
  var b = 10;
} 
one();// undefined

console.log(q)
//let q;

var salary = "1000$";

(function () {
  //var salary = undefined; HOISTING!!!!***
  console.log("Original salary was " + salary);

  salary = "5000$";

  console.log("My New Salary " + salary);
})();
//undefined, 5000$***


