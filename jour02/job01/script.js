function citation(){
    const btn = document.querySelector("#button");
    btn.addEventListener("click", () => {
        console.log(document.getElementById("citation").textContent);
    });
}

citation();