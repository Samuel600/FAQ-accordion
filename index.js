const btn = document.querySelectorAll(`.question`);
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const questionid = e.target.parentElement.id;
    const answer = document.querySelector(`.answer-${questionid}`);
    answer.classList.toggle("none");
  });
});
