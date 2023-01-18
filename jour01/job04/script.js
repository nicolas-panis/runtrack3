function bissextile(annee){
    return (((annee & 3) == 0) && ((annee % 100 != 0) || (annee % 400 == 0)));
}

annee = 2023;

result = bissextile(annee);

if (result == true){
    console.log(annee + " est une année bissextile");
}
else{
    console.log(annee + " n'est pas une année bissextile");
}