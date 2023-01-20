function veriflongueur(ajout){
    var elDiv = document.getElementById('dessin').getElementsByTagName("*");
    tab = [];
    if (ajout == true){
        i++;
    }
    else {
        i--;
    }
    console.log(i);
    if (i == 6){
        for (i = 0; i < elDiv.length; i++){
            //console.log(elDiv[i].id[3]);
            tab.push(elDiv[i].id[3]);
        }
        if(tab[0] == 1 && tab[1] == 2 && tab[2] == 3 && tab[4] == 5 && tab[5] == 6){
            $("#image").append($("<p style = 'text-align: center;'>Vous avez gagné<p>"));
        }
        else{
            $("#image").append($("<p style = 'text-align: center;'>Vous avez perdu<p>"));
        }
    } 
    
}


ajout1 = false;
ajout2 = false;
ajout3 = false;
ajout4 = false;
ajout5 = false;
ajout6 = false;
i = 0;



$("#button").click(function(){
    img1 = "<img id = 'img1' src='image/arc1.png'>"
    img2 = "<img id = 'img2' src='image/arc2.png'>"
    img3 = "<img id = 'img3' src='image/arc3.png'>"
    img4 = "<img id = 'img4' src='image/arc4.png'>"
    img5 = "<img id = 'img5' src='image/arc5.png'>"
    img6 = "<img id = 'img6' src='image/arc6.png'>"

    tabimg = [img1, img2, img3, img4, img5, img6];
    u = tabimg.length;
    for(k = 0; k < tabimg.length + 1; k++){
        var rand = Math.floor(Math.random()*u);
        $("#image").append(tabimg[rand]);
        tabimg.splice(rand, 1);
        u--;
        k = 0;
        
    }

    $("#button").css("display", "none");
    $("#img1").click(function(){
    
        if (ajout1 == false){
            $("#dessin").append($("#img1"));
            ajout1 = true;
        }
        else{
            $("#image").append($("#img1"));
            ajout1 = false;
        }
        veriflongueur(ajout1);
        
    
    });
    
    $("#img2").click(function(){
        if (ajout2 == false){
            $("#dessin").append($("#img2"));
            ajout2 = true;
        }
        else{
            $("#image").append($("#img2"));
            ajout2 = false;
        }
        veriflongueur(ajout2);
    });
    
    $("#img3").click(function(){
        if (ajout3 == false){
            $("#dessin").append($("#img3"));
            ajout3 = true;
        }
        else{
            $("#image").append($("#img3"));
            ajout3 = false;
        }
        veriflongueur(ajout3);
        
    });
    
    $("#img4").click(function(){
        if (ajout4 == false){
            $("#dessin").append($("#img4"));
            ajout4 = true;
        }
        else{
            $("#image").append($("#img4"));
            ajout4 = false;
        }
        veriflongueur(ajout4);
        
    });
    
    $("#img5").click(function(){
        if (ajout5 == false){
            $("#dessin").append($("#img5"));
            ajout5 = true;
        }
        else{
            $("#image").append($("#img5"));
            ajout5 = false;
        }
        veriflongueur(ajout5);
        
    });
    
    $("#img6").click(function(){
        if (ajout6 == false){
            $("#dessin").append($("#img6"));
            ajout6 = true;
        }
        else{
            $("#image").append($("#img6"));
            ajout6 = false;
        }
        veriflongueur(ajout6);
        
    });

});



