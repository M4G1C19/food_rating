document.addEventListener("DOMContentLoaded", () => {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll("input[required]");
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = "#ff4d4d";
                    input.style.boxShadow = "0 0 0 4px rgba(255, 77, 77, 0.1)";
                } else {
                    input.style.borderColor = "#eee";
                    input.style.boxShadow = "none";
                }
            });
            if (!isValid) {
                e.preventDefault();
                alert("Пожалуйста, заполните все поля!");
            }
        });
    });
});

const searchInput = document.getElementById("search-input");
if (searchInput) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        const cards = document.querySelectorAll(".food-card");
        cards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const country = card.querySelector(".country").textContent.toLowerCase();
            const ingredients = card.querySelector(".ingredients").textContent.toLowerCase();

            if (title.includes(query) || country.includes(query) || ingredients.includes(query)) {
                card.style.display = ""; 
            } else {
                card.style.display = "none";
            }
        });
    });
}