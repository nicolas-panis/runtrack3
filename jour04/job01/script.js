$(document).ready(function (){

    txt = document.createElement("p");
    body = document.querySelector("body");

    $('#button').click(function (){
        
        console.log("ok");
        fetch("expression.txt")
            .then((response) => response.text())
            .then((response) => {
                txt.textContent = response;
                body.append(txt);
            })
            .catch((error) => console.log(error));
    })

})

