// closures
// wyprowadzanie zmiennej spoza jej zasięgu przez return

function inside(){
    let insideVar = "insideVar";
    return insideVar;
  }
  let outsideVar = inside();// korzystam ze zmiennej spoza jej zasięgu tj. f inside
  console.log(outsideVar)// insideVar
  //---------------------------------------------------------------------------------------------
  
  // zasięg leksykalny
  const name = "Iga";
  function getUser(){
    let age = 13;
    return `imię: ${name} wiek: ${age}`;
  }
   let userData = getUser();
   console.log(userData)// imię: Iga wiek: 13
  // nie znajduje w swoim zasięgu zmiennej więc idzie wyżej do globalnej

  //-------------------------------------------------------------------------------------------------
  
  // dostęp po wykonaniu funkcji
  function hello(name){
    let age = 13;// nie będzie tej zmiennej w closure bo nie używam jej poniżej w return!!! 
    //jak by był link do age ${age} to by zapamiętał
    return function(day){
      console.log(`hej ${name} ${age}, jest ${day}`)
    }
  }
  
  const greeting = hello("Iga");
  console.log(greeting);/* (day){
    console.log(`hej ${name} ${age}, jest ${day}`)
  }*/
  console.dir(greeting);//[[Scopes]]: Scopes[3] 0: Closure (hello) {name: "Iga"} => w konsoli
  console.log(greeting("wtorek"));//name po wykonaniu f hello cały czas zapamiętany
  //hej Iga 13, jest wtorek

  console.log(greeting("poniedziałek"))// name po wykonaniu f hello cały czas zapamiętany
  // funkcja hello się wykonała i js usuwa z pamięci ALE przechowuje wartość zmiennej "name" PO wykonaniu funkcji bo WIE, że
  // będzie z niej klorzystał w funkcji anonimowej (z param (day), którą przypisuję do zmiennej greeting później);
  
  //----------------------------------------------------------------------------------------------------

  const sum = function(a){
    let b = 10;
    return function(c){
      return a + b+ c;
    }
  }
  const sum20 = sum(10);
  console.log(sum20);/*ƒ (c){
    return a + b+ c;
  }*/
  const sum2 = sum20(5);
  console.log(sum2); //25

  //------------------------------------------------------------------------------------------------------
  
  function counter(start){
    let counterNumber = start;
    return function(){
      return ++counterNumber;
    }
  }
  
  const count = counter(0);
  console.log(count());//1
  console.log(count());//2
  console.log(count());//3
  console.log(count());//4
   
  //---------------------------------------------------------------------------------------------------
// ZASIEG LEKSYKALNY 
/* używa lokalizacji zdefiniowania zmiennej w kodzie źródłowym aby określić gdzie ta zmienna jest dostępna. 
Zagnieżdżone funkcje mają dostęp do zmiennych zdeklarowanych w ich zewnętrznym zasięgu. */
  /* function makeFunc() {
    var name = "Mozilla";
    return function () {
      alert(name);
    }
  }
  
  var myFunc = makeFunc();
  myFunc(); 
 */
  //-------------------------------------------------------------------------------------------------
  
  var a = 1;
  function outer(){
      var a = 2
      function inner(){
          a++;
          var a = 3;
          console.log(a);
      }
      inner();//3
      console.log(a);//2
  }
  outer();//3, 2
  console.log(a);//1 

  //---------------------------------------------------------------------------------------------------
// WYWOŁANIE 3X FUNKCJI/OPERACJI ()())()
  
   function math (x) {
    return function (y) { 
      return function (z) {
        return x + y + z;
      };
    };
  }
  
  console.log(math(3)(3)(3));  
   
  //----------------------------------------------------------------------------
  
  var a = "outside of a closure";
  function myClosure() {
      var a = "inside a closure";
      console.log(a);
  }
  myClosure();//inside a closure
  console.log(a);//outside of a closure

  foo();
function foo(){ 
	console.log(12);
};
foo();
