document.addEventListener("click", (e) => {
    if (e.target.closest(".form__button")) {
        alert("Your message has been sent!");
    }
    
})