document.addEventListener("click", (e) => {
    if (e.target.closest(".tile__button")) {
        alert("Položka byla přidána do košíku");
        e.preventDefault();
    }
    
})