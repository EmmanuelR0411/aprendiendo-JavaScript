var variable1 = 'Soy la variable 1';
console.log(variable1);
variable1 = 231;
console.log(variable1); 

function letTest(){
    let x = 5;
    if (true){
        let x = 71; 
        console.log(x); //Imprime el valor de 71 porque es el ultimo al que hace referencia
        
    }
    console.log(x);// Imprime el valor de 5 ya que para optimizar memoria toma el ultimo valor, 
    //en este caso el 5 ya que el valor de 71 esta dentro de otra cosa
    return x;
    //Si se quiere recuperar el valor se tiene que utilizar un return, en este caso retorna 5
}

//AQui afuera la variable x ya no existe ya que se declaro con let
letTest();

function varTest(){
    var x =5;
    if (true){
        var x =15; //Imprime 15
        console.log(x);
    }
    console.log(x); // imprime 15
}
//varTest();

//Funciones de flecha
//Se declara como constante ya que esta no va a cambiar
//Se declara de forma distinta pero es el equivalente a function 
const nuevaFuncion = () =>{
    var x =5;
    if (true){
        var x =15; //Imprime 15
        console.log(x);
    }
    console.log(x); // imprime 15
}
nuevaFuncion();

//TEMPLATE STRING
const nombre = 'Emmanuel';
const apellidos = 'Reyna';

console.log('Hola mi nombre es '+nombre ' mis apellidos'+apellidos);
console.log(`Hola mi nombre es ${nombre} mis apellidos ${apellidos}`); 
