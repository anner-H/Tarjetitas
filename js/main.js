import { TodasLasTarjetas } from "./data.js";

import(TodasLasTarjetas)

function agregartitulos(){

    //DOM
    let root = document.querySelector("#root");

    TodasLasTarjetas.forEach(function(fruta){
        //CREAR UN ELEMENTO
        let titulo = document.createElement("div");

        //SE AGREGA CONTENIDO
        titulo.innerHTML = 
        '<div class="Tarjetas">' +
        fruta; +
        '</div>';

        //SE AGREGA AL DOM
        root.appendChild(titulo);

    } );
    
    }

agregartitulos();