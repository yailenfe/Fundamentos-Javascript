// function myCalback(mensaje) {
//     console.log(mensaje);
// }

// function welcome(name, myCalback) {
//     const mensaje = `welcome ${name}`;
//     myCalback(mensaje);
// }

// welcome("yailen", myCalback);


//  function add (a,b,callback){
//      callback(a+b);
//  }


//  console.log('Antes de la ejecucion');
//   add(3, 5, function(result) {
//   console.log(result);});

//   console.log('Despues de la ejecucion');


function add (a,b, callback){
    setTimeout(function(){
        callback(a+b);

    },500);
}

console.log('Antes de la ejecucion');
add(3, 5, function(result) {
  console.log(result);
});
console.log('Despues de la ejecucion');