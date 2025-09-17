// Show alert only on first visit
window.addEventListener("load", () => {
    if (!localStorage.getItem("firstVisit")) {
        alert(
            "This project is for educational purposes only. All brand names and images are property of their respective owners.\n\nNote: This is a frontend clone created for portfolio and educational purposes. It is not affiliated with or endorsed by Blinkit or Grofers."
        );
        localStorage.setItem("firstVisit", "true");
    }
});

// Rotating search placeholders
const placeholders = [
    'Search "milk"',
    'Search "butter"',
    'Search "bread"',
    'Search "paneer"',
    'Search "egg"',
    'Search "Chips"',
    'Search "curd"',
    'Search "rice"',
    'Search "Chocolate"'
];

let index = 0;
function changePlaceholder() {
    const input = document.querySelector(".searchbox input");

    input.classList.add("slide");

    setTimeout(() => {
        input.placeholder = placeholders[index];
        index = (index + 1) % placeholders.length;
        input.classList.remove("slide");
    }, 500); // matches CSS transition
}

setInterval(changePlaceholder, 2000);
