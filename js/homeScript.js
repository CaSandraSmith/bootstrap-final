document.addEventListener("DOMContentLoaded", function () {
  const inviteButton = document.getElementById("invite-modal-button");
  const inviteForm = document.getElementById("inviteForm");
  const inviteModalBody = document.getElementById("invite-modal-body");
  const inviteModal = document.getElementById("inviteModal");

  inviteForm.addEventListener("submit", function (event) {
    console.log("form submitted")
    event.preventDefault()
    const inviteModalHeader = document.getElementById("inviteModalHeader");
    inviteModalHeader.innerHTML = `<button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>`

    const invitedUser = document.getElementById("invite-email-input").value;
    inviteModalBody.innerText = `Nice! You just sent an invite to ${invitedUser}!`;
    inviteButton.remove();
  });

  inviteModal.addEventListener("hidden.bs.modal", function () {
    inviteModal.innerHTML = `
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="inviteModalLabel">
                    Get 20% off your next month when your friend joins, and
                    they'll save 20% on their first month. Share the love and
                    the savings!
                </h1>
            </div>
            <div class="modal-body" id="invite-modal-body">
                <form>
                    <label for="email">Enter their email:</label>
                    <input type="email" name="email" id="invite-email-input" required/>
                </form>
            </div>
            <div class="modal-footer">
                <button
                    type="submit"
                    class="btn btn-primary"
                    id="invite-modal-button"
                >
                    Send invite
                </button>
            </div>
        </div>
      </div>
    `;
  });
});
