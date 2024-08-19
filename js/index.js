document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".modal").style = "display: block;";
        document.querySelector(".modal-content>iframe").src = anchor.href;
        document.querySelector(".modal-content>iframe").style = "visibility: visible;"
    });
});
document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".modal").style = "display: none;";
    document.querySelector(".modal-content>iframe").src = "";
    document.querySelector(".modal-content>iframe").style = "visibility: hidden;"
})