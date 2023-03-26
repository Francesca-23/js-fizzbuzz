/*
1-Scrivi un programma che stampi in console i numeri da 1 a 100. 
    -ciclo for
2-per i multipli di 3 stampi “Fizz” al posto del numero.
    -if: variabile % 3
3-per i multipli di 5 stampi “Buzz”.
    -else if: variabile % 5
4-per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
    -else if: variabile % 3 && variabile % 5
5-Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
    -append()
*/


for(let i = 1; i <= 100; i++){

    let container = document.querySelector('#cards');
    let item = document.createElement('div');

    if(i % 3 == 0){

        item.className = "box background1 py-4 shadow rounded";
        item.innerHTML = `Fizz`;
        container.append(item);

    }else if(i % 5 == 0){
        
        item.className = "box background2 py-4 shadow rounded";
        item.innerHTML = `Buzz`;
        container.append(item);

    }else if(i % 3 == 0 && i % 5 == 0){  //da aggiustare: non funziona
        console.log('FizzBuzz');
   
    }else{
        
        item.className = "box background4 py-4 shadow rounded";
        item.innerHTML = `${i}`;
        container.append(item);
    }

}

