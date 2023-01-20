function addone(){
    const btn = document.querySelector("#button");
    const p = document.querySelector("#compteur");
    i = 1;
    btn.addEventListener("click", () => {
        p.textContent = i;
        i++
    });
}

addone();