document.addEventListener("DOMContentLoaded", function () {
  const modalCalButtons = document.querySelectorAll(".future-cal-class");

  modalCalButtons.forEach((button) => {
    button.addEventListener("click", function () {
        console.log("button click")
      const date = button.innerText;

      const targetModalId = button.getAttribute("data-bs-target");
      const modal = document.querySelector(targetModalId);

      const modalTitle = modal.querySelector(".modal-title");
      if (modalTitle) {
        console.log("in conditional", modalTitle)
        modalTitle.innerText = `December ${date}th`;
        
      }
    });
  });

});
