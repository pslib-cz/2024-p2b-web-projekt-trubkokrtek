document.addEventListener("click", (e) => {
    if (e.target.closest(".form__button")) {
        alert("Tvoje zpráva byla odeslána");
    }
    
})