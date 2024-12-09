document.addEventListener("DOMContentLoaded", function () {
  const modalCalButtons = document.querySelectorAll(".future-cal-class");

  modalCalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const date = button.innerText;

      const modal = document.querySelector(".calModal");
      const modalTitle = modal.querySelector(".modal-title");
      if (modalTitle) {
        modalTitle.innerText = `December ${date}th`;
      }
    });
  });

});
