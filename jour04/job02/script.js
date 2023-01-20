function jsonValueKey(str, index){
    console.log(str[index]);
            
}


$(document).ready(function (){

    fetch("string.json")
    .then((response) => response.json())
    .then((response) => {
       jsonValueKey(response, "city");
    })
    .catch((error) => console.log(error));


})

