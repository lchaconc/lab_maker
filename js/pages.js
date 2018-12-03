$(document).ready(function () {
    hoverEfect();
    $( document ).tooltip();
});

function hoverEfect() {
    $(".sprites").mouseenter(function () { 
            $( this ).effect( "bounce", "slow" );
    });
}