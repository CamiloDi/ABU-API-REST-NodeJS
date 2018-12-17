function palindromo(frase){

    let nuevaFrase= (frase.split(' ').join('')).toLowerCase().normalize('NFD').replace(/[^a-zA-Z ]/g, "");
    let comparar=nuevaFrase;
    let arreglo = (nuevaFrase.split('')).reverse();
    nuevaFrase='';
    arreglo.map((letra)=>
          {
            nuevaFrase=(nuevaFrase+letra);
        });
    return comparar==nuevaFrase;
  }
  
  //console.log(palindromo('Lo sé, Dama de Sol.'));
  
  function FizzBuzz(){
    for(var i=1;i<=100;i++){
      if((i % 3)==0&&(i % 5)!=0){
        console.log('Fizz');
      }
      else if((i % 3)!=0&&(i % 5)==0){
        console.log('Buzz');
      }
      else if((i % 3)==0&&(i % 5)==0){
        console.log('FizzBuzz');
      }
      else{
        console.log(i);
      }
    }
    
    }
    //console.log(FizzBuzz());
    function anagrama(palabra1,palabra2){
  
      let arreglo1 = palabra1.toLowerCase().normalize('NFD').split('').sort();
      let arreglo2 = palabra2.toLowerCase().normalize('NFD').split('').sort();
      let tamanio=arreglo1.length;
      let resultado= true;
    
      for(var i=0;i<tamanio;i++){
        if(arreglo1[i]!=arreglo2[i]){
          resultado= false;
        }
      }
      return resultado;
      
      }
      
      //console.log(anagrama("Electromagnético","magnetoeléctrico"));
      
  function factorial(n){
  let total=1;
  let cont=1;
  while(cont<=n){
    total=total*cont;
    cont++;
  }
    return total;
  }
  //console.log(factorial(50));
  
  function factorial(n){
    let total=1;
    let cont=1;
    while(cont<=n){
      total=total*cont;
      cont++;
    }
      return total;
    }
    //console.log(factorial(50));
  
    function arrayDatos(n){
      let ordenado=n.sort((a, b) => b - a);
      let tamanio=ordenado.length;
      let promedio=0;
      let numeroPares=[];
      let indicePar=0;
      let numeroImpares=[];
      let indiceImpar=0;
      let repetido=0;
      let cant=1;
      let arregloRepetidos=[];
      let indiceRepetidos=0;
      let arregloPrimos=[];
      let indicePrimos=0;
  
       n.map((num)=>{
         let esPrimo=true;
          promedio=promedio+num;
          //par e impar
          if((num%2)==0){
            numeroPares[indicePar]=num;
            indicePar++
          }
          else {
            numeroImpares[indiceImpar]=num;
            indiceImpar++
          }
          //Repetidos
          if(repetido!=num){
            repetido=num;
            cant=1;
          }else{
            cant++;
          }
          if(cant==2){
            arregloRepetidos[indiceRepetidos]=num;
            indiceRepetidos++;
          }
          //Primos
          esPrimo=EsPrimo(num);
  
          if(esPrimo){
            arregloPrimos[indicePrimos]=num;
            indicePrimos++;
          }
  
        });
      promedio=promedio/tamanio;
      
      function EsPrimo(value) {
        for(var i = 2; i < value; i++) {
            if(value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }
  /*
      console.log('El numero menor es el: '+ordenado[tamanio-1]);
      console.log('El numero mayor es el: '+ordenado[0]);
      console.log('El orden decendiente es el siguiente: '+ordenado);
      console.log('El promedio de sus valores es: '+promedio);
      console.log('Los numeros pares son: '+numeroPares.sort((a, b) => a - b));
      console.log('Los numeros impares son: '+numeroImpares.sort((a, b) => a - b));
      console.log('Los numeros primos son: '+arregloPrimos);
      console.log('Los numeros repetidos son: '+arregloRepetidos);
      */
      }
      //console.log(arrayDatos([1,2,3,4,5]));
  
      function restoArreglo(arreglo){
        let tamanio=(arreglo.length-1);
        let arregloDividido=[tamanio];
        let total=0;
        for(var i =0;i<tamanio;i++){
          arregloDividido[i]=arreglo[0]/arreglo[i+1];
          arregloDividido[i]=(arregloDividido[i]+'').split('.');
          total=total+parseInt(arregloDividido[i][1]);
        }
        let resultado =0;
  
        while (total) {
          resultado += total % 10;
          total = Math.floor(total / 10);
      }
        return resultado;
      }
      //console.log(restoArreglo([7,5,2,4]));
  
   
  