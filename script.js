const free = document.querySelector("#free");
const basic = document.querySelector("#basic");
const professional = document.querySelector("#professional");

const changeCard = (card) => {
  free.classList.remove("selected");
  basic.classList.remove("selected");
  professional.classList.remove("selected");

  card.classList.add("selected");
};

free.addEventListener("click", () => {
  changeCard(free);
});

basic.addEventListener("click", () => {
  changeCard(basic);
});

professional.addEventListener("click", () => {
  changeCard(professional);
});
