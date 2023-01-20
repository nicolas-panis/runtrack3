function showhide(){
    const btn = document.querySelector("#button");
    const article = document.querySelector("#citation");
    i = false;
    btn.addEventListener("click", () => {
        
        if (i == false){
            article.style = "visibility: visible";
            i = true;
        }
        else{
            article.style = "visibility: hidden";
            i = false;
        }
    });
}

showhide();