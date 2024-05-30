const ratingEls = document.querySelectorAll(".reaction");
const btnEl = document.querySelector("button");

const containerEl = document.getElementById("card");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
  ratingEl.addEventListener("click", (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

btnEl.addEventListener("click", () => {
  if (selectedRating !== "") {
    containerEl.innerHTML = `
        <h1 style="color:rgb(5, 198, 134)">Thank you!</h1>
        <br>
        <h1 style="color:rgb(5, 198, 134)">Feedback: ${selectedRating}</h1>
        <br>
        <p style="Font-size:30px">We'll use your feedback to improve our customer support.</p>
        `;
  }
});

function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active");
  });
}
