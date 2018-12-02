$(document).ready(function () {
    loadEvents();
});

function loadEvents() {
    console.log("events");

    $(".sprites").mouseenter(function () { 
        $( this ).effect( "bounce", "slow" );
    });

    $(".sprites").click(function () {              
        $( this ).effect( "puff", routing);
    });


  }


  function routing (opt) {
      //console.log(opt);
      window.location="./pages/engranaje.html"
    /*  
      switch (opt) {
          case "imgSesion1":
            window.location="./pages/engranaje.html"
            break;
      
          default:
          console.log("opcion fuera de rango");
          
              break;
      }
      */
      
  }