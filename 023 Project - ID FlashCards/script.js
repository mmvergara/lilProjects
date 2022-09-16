const cardContainer = document.querySelector(".main-big-container");

cardContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".flipCard--inner");
  console.log(target)
  if(target){
    target.classList.toggle('rotateToBack')
  }
});
