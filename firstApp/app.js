/* function sayHello(name) {
  console.log("Hello " + name);
}
sayHello("Giselle"); */

//ECM6
/* let years = [2020, 2025, 2030];
let age = years.map((el) => 2019 - el);
console.log(age); */

//Funciones Callback EJ 1
/* function mainFunction (callback) {
  console.log("Mensaje antes del callback ");
  callback();
}

function secondFunction() {
  console.log("Mensaje despues del callback ");
}

mainFunction(secondFunction); */

//Funciones Callback EJ 2
/* function sumar(num1, num2, callback) {
  let resultado = num1 + num2;
  callback(resultado);
}

function mostrarResultado(res) {
  console.log("resultado de la suma: " + res);
}

sumar(2,3,mostrarResultado); */


//Funciones Callback EJ 3 TimeOut

/* setTimeout(function () {
  console.log("Se mostrará después de 3 segundos")
}, 3000) */

/* setTimeout(function () {
  console.log("Se mostrará después de 3 segundos")
}, 3000) */

/*Promises*/

//EJ1
/* const mensaje = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true)
      resolve("Mensaje despues de 3 segundos")
    else
      reject('Hubo un error');
  }, 3000);
});

mensaje
  .then(msj => {
    console.log(msj);
  })
  .catch(error => {
    console.log(error);
  }) */

  //EJ2
//const mensaje = new Promise((resolve, reject) => {
function mensaje() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true)
        resolve("Mensaje despues de 3 segundos")
      else
        reject('Hubo un error');
    }, 3000);
  });
}

async function llamadaAsync() {
  console.log("Llamada...");
  const resultado = await mensaje();
  return resultado;
}

llamadaAsync().then(x => console.log(x)).catch(e => console.log(e));
  
/*   mensaje
    .then(msj => {
      console.log(msj);
    })
    .catch(error => {
      console.log(error);
    }) */