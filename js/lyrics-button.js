document.querySelectorAll(".songButton").forEach(function(button) {
    button.addEventListener("click", function() {
        var lyrics = this.nextElementSibling;
        var caret = this.querySelector(".caret");
        var isOpen = lyrics.style.display === "block";

        lyrics.style.display = isOpen ? "none" : "block";
        caret.textContent = isOpen ? "▼" : "▲";
    });
});
