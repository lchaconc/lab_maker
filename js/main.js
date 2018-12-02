"use strict";
var spriteSelected, nivel = 1 ;

$(document).ready(function () {
    loadEvents();
});

function loadEvents() {
    console.log("events");

    $(".sprites").mouseenter(function () {
        spriteSelected = this.id;
        //console.log(spriteSelected); 
        showInfo();
                
        $( this ).effect( "bounce", "slow" );
    });

    $(".sprites").click(function () {              
        $( this ).effect( "puff", routing);
    });


    $(".sprites").mouseleave(function () { 
        $(".div-info").slideUp();
    });


  }

function showInfo() {   
    switch (spriteSelected) {
        case "imgSesion1":           
            $(".span-titulo").text("Unidad 1: Iniciando la preparación"); 
            $(".parrafo-Info").text("Preparación y contectualización para la creación de experimentos. Se obtienen los instrumentos para el laboratorio. ");          
        break;
        case "imgSesion2":
            $(".span-titulo").text("Unidad 2: Reforzando el conocimiento"); 
            $(".parrafo-Info").text("Se profundiza en elementos para la creación de juegos y actividades interactivas ");          
        break;
        case "imgSesion3":
            $(".span-titulo").text("Unidad 3: Nuestro primer experimento"); 
            $(".parrafo-Info").text("En este momento tenemos la posibilidad de crear nuestro primer experimento sin que haya peligro... ");          
        break;
    
        default:
        console.log("opcion fuera de rango");
            break;
    }
    $(".div-info").slideDown();
}



  function routing () {    
      switch (spriteSelected) {
          case "imgSesion1":
            window.location="./pages/engranaje.html"
            break;
            case "imgSesion2":
            $( "#"+spriteSelected ).fadeIn( );
      
            break;
            case "imgSesion3":
            console.log("3");
            $( "#"+spriteSelected ).fadeIn( );
        
            break;
      
          default:
          console.log("opcion fuera de rango");
          
              break;
      }
      
      
  }