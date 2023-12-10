let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Вернись, сучка :("; 
})

window.addEventListener("focus", () => {
    document.title = docTitle;
})