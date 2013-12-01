function getContent(){
    loc=window.location.href.split('/').pop().replace('\#','');
    console.log(loc);
    if(loc == ''){
        loc='home';
    }
    if(loc == 'home'){
        getHtml('home');
    }else{
        getHtml(loc);
    }
}
function getHtml(file){
    $.get( file, function( data ) {
            $( "#content" ).html( data );
            });
}
$(document).ready(getContent());

