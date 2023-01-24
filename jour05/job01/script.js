$(document).ready(function (){

    const connexion_email = document.querySelector('#connexion_email');
    const connexion_mdp = document.querySelector('#connexion_mdp');

    $('#connexion_button').click(function (){
        if (connexion_email.value == "" || connexion_mdp.value == ""){
            alert("Veuillez renseigner tous les champs");
        }
        else{ 
            fetch("data.json")
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    for (key in response){
                        if (response[key].email == connexion_email.value){
                            if (response[key].password == connexion_mdp.value){
                                //document.location.href = "index.php"
                                form = document.createElement('form');
                                form.method = 'post';
                                form.action = "index.php";
                                hiddenField = document.createElement('input');
                                hiddenField.type = 'hidden';
                                hiddenField.name = 'prenom';
                                hiddenField.value = response[key].prenom;

                                form.appendChild(hiddenField);
                                document.body.appendChild(form);
                                form.submit();
                            }
                            else{
                                alert("Mot de passe invalide!")
                            }
                            
                        }
                    }
                })
                .catch((error) => console.log(error));
        }

    })
    

    const inscription_nom = document.querySelector('#inscription_nom');
    const inscription_prenom = document.querySelector('#inscription_prenom');
    const inscription_email = document.querySelector('#inscription_email');
    const inscription_mdp = document.querySelector('#inscription_mdp');
    const inscription_confirm_mdp = document.querySelector('#inscription_confirm_mdp');

    const inscription_form = document.querySelector('#inscription_form');
    const inscription_button = document.querySelector('#inscription_button');

    $('#inscription_button').click(function (){
        if (inscription_nom.value == "" || inscription_prenom.value == "" || inscription_email.value == "" || inscription_mdp.value == "" || inscription_confirm_mdp == ""){
            alert("Veuillez renseigner tous les champs");
        }
        else if (inscription_mdp.value != inscription_confirm_mdp.value){
            alert("Les mots de passe sont différents")
        }
        else{
            fetch('data.json')
                .then((response) => response.json())
                .then((response) =>{
                    test = 0;
                    for (key in response){
                        if (response[key].email == inscription_email.value){
                            alert("Email déjà existant");
                            test++;
                            break;
                        }
                    }
                    if (test == 0){
                        inscription_form.submit();
                    }
                    else{
                        test = 0;
                    } 
                })
                .catch((error) => console.log(error));              
        }


    })


})

