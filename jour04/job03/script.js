$(document).ready(function (){

    const id = document.querySelector("#id");
    const name = document.querySelector("#name");
    const type = document.querySelector("#type");

    txt = document.createElement("p");
    body = document.querySelector("body");

    $('#button').click(function (){

        para = document.createElement('p');
        br = document.createElement('br');

        fetch("pokemon.json")
            .then((response) => response.json())
            .then((response) => {
            for (key in response){
                if (response[key].id == id.value){
                    para.innerHTML += `${response[key].name.french}` + ` ` + `${response[key].type}` + ` ` + JSON.stringify(response[key].base) + "<br />";
                    body.append(para);
                }
                else if (response[key].name.french == name.value){
                    para.innerHTML += `${response[key].name.french}` + ` ` + `${response[key].type}` + ` ` + JSON.stringify(response[key].base) + "<br />";
                    body.append(para);
                }
                else if (response[key].type.includes(type.value)){
                    para.innerHTML += `${response[key].name.french}` + ` ` + `${response[key].type}` + ` ` + JSON.stringify(response[key].base) + "<br />";
                    body.append(para);
                }
                
            }

            })
            .catch((error) => console.log(error));
    })

})