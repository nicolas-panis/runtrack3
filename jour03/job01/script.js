i = false;

$('#button').click(function() {
    if (i == false){
        $("p").css("visibility", "visible");
        i = true;
    }
    else{
        $("p").css("visibility", "hidden");
        i = false;
    }
});

$('#cache').click(function() {
        $("*").css("display", "none");
});