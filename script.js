const btns = document.querySelectorAll(".btn");

//Looping through all btn elements
btns.forEach((btn) => {
  // Listening for click event
  btn.addEventListener("click", () => {
    // Loop to remove active class on all btn and all tab content.
    btns.forEach((btn) => {
      btn.classList.remove("active");
      document.querySelector(btn.dataset.targetTab).classList.remove("active");
    });
    // Then adding active class to the clicked btn and tab content
    btn.classList.add("active");
    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});
