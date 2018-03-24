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

    //Añadir a localstorage
    addTweetLocalstorage( tweet );
}

//Eliminar Tweets
function eliminarTweets( e ){
    e.preventDefault();
    
    if( e.target.className == 'borrar-tweet'){
        e.target.parentElement.remove();
    }    
}

//Agregar tweet a localstorage
function addTweetLocalstorage( tweet ){
    let tweets;

    tweets = obtenerTweetsLocalstirage();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir de string a arreglo para localstorage
    localStorage.setItem('tweets', JSON.stringify(tweets) );

}

//Leer los datos que hay en local storage
function obtenerTweetsLocalstirage(){
    let dataTweets;

    //revisamos valores de localstorage
    if( localStorage.getItem( 'tweets' ) === null ){
        dataTweets = [];
    }else{
        dataTweets = JSON.parse( localStorage.getItem('tweets') );
    }

    return dataTweets;
}