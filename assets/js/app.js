//Variables

const listaTweets = document.getElementById('lista-tweets');


//Event listeners

eventsListeners();

function eventsListeners(){
     //cuando se envia e formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     //Borrar tweet
     listaTweets.addEventListener('click', eliminarTweets);
}


//Funciones

//Agregar tweets
function agregarTweet( e ){
     e.preventDefault();
     
    //leer valor de text area
    const tweet =  document.querySelector('#tweet').value;

    //creamos boton eliminar
    const botonEliminar = document.createElement('a');
    botonEliminar.classList = 'borrar-tweet';
    botonEliminar.innerText = 'X';
 
    //Crear elemento e insertarlo en la lista
    const li = document.createElement('li');
    li.innerText = tweet;

    //añade el btoton borrar tweet
    li.appendChild( botonEliminar );
    listaTweets.appendChild(li);

}

//Eliminar Tweets

function eliminarTweets( e ){
    e.preventDefault();
    
    if( e.target.className == 'borrar-tweet'){
        e.target.parentElement.remove();
    }

    
}